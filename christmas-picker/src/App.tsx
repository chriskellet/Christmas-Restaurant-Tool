import { useState, useMemo } from 'react';
import { Button } from './components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './components/ui/card';
import Snowfall from './components/Snowfall';
import { restaurants, questions } from './data/restaurants';
import { Utensils, Star, MapPin, TrendingUp, Clock, Beer } from 'lucide-react';

type Answers = {
  budget?: string;
  cuisine?: string;
  atmosphere?: string;
  michelin?: string;
  pubs?: string;
  duration?: string;
};

function App() {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<Answers>({});
  const [showResults, setShowResults] = useState(false);

  const handleAnswer = (questionId: string, value: string) => {
    setAnswers({ ...answers, [questionId]: value });

    if (currentStep < questions.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      setShowResults(true);
    }
  };

  const filteredRestaurants = useMemo(() => {
    let filtered = restaurants.filter(r => r.status === 'available');

    if (answers.budget) {
      filtered = filtered.filter(r => r.priceRange === answers.budget);
    }

    if (answers.cuisine && answers.cuisine !== 'Other') {
      filtered = filtered.filter(r => r.cuisine === answers.cuisine);
    }

    if (answers.atmosphere) {
      filtered = filtered.filter(r => r.atmosphere === answers.atmosphere);
    }

    if (answers.michelin === 'yes') {
      filtered = filtered.filter(r => r.michelin);
    }

    if (answers.pubs === 'yes') {
      filtered = filtered.filter(r => r.pubsNearby);
    }

    if (answers.duration) {
      filtered = filtered.filter(r => r.duration === answers.duration);
    }

    return filtered.sort((a, b) => {
      // Prioritize Michelin stars
      if (a.michelin && !b.michelin) return -1;
      if (!a.michelin && b.michelin) return 1;
      // Then by price
      return a.pricePerHead - b.pricePerHead;
    });
  }, [answers]);

  const reset = () => {
    setCurrentStep(0);
    setAnswers({});
    setShowResults(false);
  };

  const goBack = () => {
    if (showResults) {
      setShowResults(false);
      setCurrentStep(questions.length - 1);
    } else if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const currentQuestion = questions[currentStep];
  const progress = ((currentStep + 1) / questions.length) * 100;

  return (
    <div className="min-h-screen christmas-gradient relative overflow-hidden">
      <Snowfall />

      <div className="container mx-auto px-4 py-8 relative z-10">
        <header className="text-center mb-12">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 festive-glow">
            🎄 Christmas Dinner Picker 🎄
          </h1>
          <p className="text-xl text-green-100 mb-2">
            Finding the perfect restaurant for your festive feast!
          </p>
          <p className="text-sm text-green-200 italic">
            Based on the legendary "Blowout... er, Cheap Trick" WhatsApp chat
          </p>
        </header>

        {!showResults ? (
          <div className="max-w-2xl mx-auto">
            <div className="mb-6">
              <div className="flex justify-between text-sm text-white mb-2">
                <span>Question {currentStep + 1} of {questions.length}</span>
                <span>{Math.round(progress)}%</span>
              </div>
              <div className="w-full bg-green-900 rounded-full h-3 overflow-hidden">
                <div
                  className="bg-gradient-to-r from-yellow-400 to-red-500 h-full transition-all duration-500 gold-glow"
                  style={{ width: `${progress}%` }}
                />
              </div>
            </div>

            <Card className="border-4 border-red-700 shadow-2xl bg-green-50">
              <CardHeader>
                <CardTitle className="text-3xl text-green-900">
                  {currentQuestion.question}
                </CardTitle>
                <CardDescription className="text-lg">
                  Choose the option that best fits your Christmas dinner plans
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                {currentQuestion.options.map((option) => (
                  <Button
                    key={option.value}
                    onClick={() => handleAnswer(currentQuestion.id, option.value)}
                    variant="outline"
                    className="w-full h-auto py-4 text-lg justify-start hover:bg-red-50 hover:border-red-500 hover:scale-105 transition-all"
                  >
                    <span className="text-3xl mr-4">{option.emoji}</span>
                    <span className="text-left">{option.label}</span>
                  </Button>
                ))}

                {currentStep > 0 && (
                  <Button
                    onClick={goBack}
                    variant="ghost"
                    className="w-full mt-4 text-green-700 hover:text-green-900"
                  >
                    ← Go Back
                  </Button>
                )}
              </CardContent>
            </Card>
          </div>
        ) : (
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-4xl font-bold text-white mb-4 festive-glow">
                🎅 Your Perfect Christmas Restaurants 🎅
              </h2>
              <p className="text-xl text-green-100 mb-4">
                Based on your preferences, here are {filteredRestaurants.length} great {filteredRestaurants.length === 1 ? 'match' : 'matches'}!
              </p>
              {filteredRestaurants.length === 0 && (
                <p className="text-yellow-300 text-lg">
                  No restaurants match all your criteria. Try adjusting your preferences!
                </p>
              )}
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              {filteredRestaurants.map((restaurant) => (
                <Card key={restaurant.id} className="border-3 border-red-600 hover:border-yellow-400 transition-all hover:scale-105 bg-white">
                  <CardHeader>
                    <CardTitle className="flex items-start justify-between text-2xl text-red-800">
                      <span>{restaurant.name}</span>
                      {restaurant.michelin && (
                        <div className="flex gap-0.5">
                          {Array.from({ length: restaurant.michelinStars || 1 }).map((_, i) => (
                            <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                          ))}
                        </div>
                      )}
                    </CardTitle>
                    <CardDescription className="text-base flex items-center gap-2 text-green-700">
                      <Utensils className="w-4 h-4" />
                      {restaurant.cuisine}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="flex items-center gap-2 text-sm">
                        <TrendingUp className="w-4 h-4 text-red-600" />
                        <span className="font-semibold">£{restaurant.pricePerHead}/person</span>
                        <span className="text-xs text-gray-500 ml-auto">
                          {restaurant.priceRange}
                        </span>
                      </div>

                      <div className="flex items-center gap-2 text-sm">
                        <MapPin className="w-4 h-4 text-green-600" />
                        <span>{restaurant.location}</span>
                        {restaurant.pubsNearby && (
                          <span title="Pubs nearby!">
                            <Beer className="w-4 h-4 text-amber-600 ml-auto" />
                          </span>
                        )}
                      </div>

                      <div className="flex items-center gap-2 text-sm">
                        <Clock className="w-4 h-4 text-blue-600" />
                        <span className="capitalize">{restaurant.duration} meal</span>
                        <span className="text-xs text-gray-500 ml-auto capitalize">
                          {restaurant.atmosphere}
                        </span>
                      </div>

                      <div className="pt-3 border-t">
                        <p className="text-sm text-gray-700 italic">
                          "{restaurant.notes}"
                        </p>
                      </div>

                      {restaurant.url && (
                        <a
                          href={restaurant.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="block mt-4"
                        >
                          <Button className="w-full bg-red-600 hover:bg-red-700 text-white">
                            View Menu
                          </Button>
                        </a>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="text-center space-y-4">
              <div className="flex gap-4 justify-center">
                <Button
                  onClick={goBack}
                  variant="outline"
                  className="bg-white border-2 border-red-600 text-red-600 hover:bg-red-50"
                  size="lg"
                >
                  ← Change Answers
                </Button>
                <Button
                  onClick={reset}
                  className="bg-green-600 hover:bg-green-700 text-white"
                  size="lg"
                >
                  🔄 Start Over
                </Button>
              </div>

              <Card className="max-w-2xl mx-auto bg-yellow-50 border-2 border-yellow-600">
                <CardHeader>
                  <CardTitle className="text-xl text-yellow-900">🎁 Pro Tip</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-yellow-800">
                    Remember: You need to catch the 22:50 train from Paddington (gets home at 1:15am),
                    it's Thursday 17th or 18th December, and Charles will be 8.5 months pregnant...
                    wait, that's Abi! Choose wisely! 🎄
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        )}
      </div>

      <footer className="text-center py-6 text-green-100 text-sm relative z-10">
        <p>Made with ❤️ and 🎄 for the best Christmas dinner ever!</p>
        <p className="mt-2 italic">May your duck be crispy and your trains be on time 🚂</p>
      </footer>
    </div>
  );
}

export default App;
