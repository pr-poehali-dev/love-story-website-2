import { useState, useEffect } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [daysTogether, setDaysTogether] = useState(0);
  const [selectedMoment, setSelectedMoment] = useState<number | null>(null);
  const [selectedLetter, setSelectedLetter] = useState<number | null>(null);

  const startDate = new Date('2024-01-14');

  useEffect(() => {
    const calculateDays = () => {
      const today = new Date();
      const diffTime = Math.abs(today.getTime() - startDate.getTime());
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
      setDaysTogether(diffDays);
    };

    calculateDays();
    const interval = setInterval(calculateDays, 1000 * 60 * 60);
    return () => clearInterval(interval);
  }, []);

  const gallery = [
    { id: 1, url: 'https://cdn.poehali.dev/projects/a3834a78-b1aa-4014-bdef-e64c9deeb6e4/files/a2d0d150-43ca-45cd-b0f7-1c6563274976.jpg', caption: 'Наш первый закат вместе' },
    { id: 2, url: 'https://images.unsplash.com/photo-1518199266791-5375a83190b7?w=800', caption: 'Путешествие в горы' },
    { id: 3, url: 'https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?w=800', caption: 'Вечер у моря' },
    { id: 4, url: 'https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?w=800', caption: 'Прогулка в парке' },
    { id: 5, url: 'https://images.unsplash.com/photo-1537633552985-df8429e8048b?w=800', caption: 'Наше кафе' },
    { id: 6, url: 'https://images.unsplash.com/photo-1522673607200-164d1b6ce486?w=800', caption: 'Домашний уют' },
  ];

  const moments = [
    { id: 1, date: '14 января 2024', title: 'Первая встреча', description: 'Тот день, когда всё началось', icon: 'Heart' },
    { id: 2, date: '14 февраля 2024', title: 'Первый День Влюблённых', description: 'Романтический ужин при свечах', icon: 'Sparkles' },
    { id: 3, date: '15 марта 2024', title: 'Первое путешествие', description: 'Незабываемые выходные в горах', icon: 'Mountain' },
    { id: 4, date: '10 мая 2024', title: 'Наша годовщина', description: 'Один год вместе', icon: 'Calendar' },
  ];

  const letters = [
    { id: 1, from: 'Для тебя', preview: 'Каждый день с тобой - это подарок...', content: 'Каждый день с тобой - это подарок, который я никогда не перестану ценить. Ты делаешь мою жизнь ярче, наполняешь её смыслом и радостью. Спасибо, что ты есть. Люблю тебя!' },
    { id: 2, from: 'Для меня', preview: 'Ты мой дом, моя опора, моя любовь...', content: 'Ты мой дом, моя опора, моя любовь. С тобой я чувствую себя в безопасности и счастливой. Каждое утро просыпаюсь с улыбкой, зная, что ты рядом. Ты - лучшее, что случилось в моей жизни.' },
  ];

  const scrollToSection = (section: string) => {
    setActiveSection(section);
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-primary/20">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-serif font-bold text-primary">Наша История</h1>
            <div className="flex gap-6">
              {['home', 'gallery', 'moments', 'letters'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`text-sm font-medium transition-colors hover:text-primary ${
                    activeSection === section ? 'text-primary' : 'text-muted-foreground'
                  }`}
                >
                  {section === 'home' && 'Главная'}
                  {section === 'gallery' && 'Галерея'}
                  {section === 'moments' && 'Моменты'}
                  {section === 'letters' && 'Письма'}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      <section id="home" className="min-h-screen flex items-center justify-center pt-20 animate-fade-in">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto space-y-8">
            <Icon name="Heart" className="w-16 h-16 text-primary mx-auto animate-float" />
            <h1 className="text-6xl md:text-8xl font-serif font-bold text-primary text-glow-strong">
              Наша Любовь
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground font-light">
              История двух сердец, бьющихся в унисон
            </p>
            
            <div className="mt-12 p-8 bg-black/60 backdrop-blur-sm rounded-3xl border-2 border-primary/20 inline-block animate-scale-in">
              <p className="text-sm text-muted-foreground mb-2">Вместе уже</p>
              <p className="text-6xl font-serif font-bold text-primary">{daysTogether}</p>
              <p className="text-sm text-muted-foreground mt-2">дней</p>
            </div>

            <div className="mt-12">
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-8 py-6 text-lg hover-scale"
                onClick={() => scrollToSection('gallery')}
              >
                Посмотреть нашу историю
                <Icon name="ArrowDown" className="ml-2" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section id="gallery" className="min-h-screen py-20 animate-fade-in-up">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-5xl font-serif font-bold text-primary text-glow mb-4">Галерея Моментов</h2>
            <p className="text-lg text-muted-foreground">Наши любимые фотографии</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {gallery.map((image, index) => (
              <div 
                key={image.id} 
                className="group relative overflow-hidden rounded-2xl cursor-pointer hover-scale"
                style={{ animationDelay: `${index * 0.1}s` }}
                onClick={() => setSelectedImage(image.id)}
              >
                <img 
                  src={image.url} 
                  alt={image.caption}
                  className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <p className="text-white font-medium">{image.caption}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="moments" className="min-h-screen py-20 bg-black/20 backdrop-blur-sm animate-fade-in-up">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-5xl font-serif font-bold text-primary text-glow mb-4">Особенные Моменты</h2>
            <p className="text-lg text-muted-foreground">Даты, которые мы никогда не забудем</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {moments.map((moment, index) => (
              <Card 
                key={moment.id}
                className="p-6 hover-scale cursor-pointer transition-all duration-300 hover:shadow-xl bg-card backdrop-blur-sm border-2 border-primary/10"
                style={{ animationDelay: `${index * 0.15}s` }}
                onClick={() => setSelectedMoment(moment.id)}
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-full">
                    <Icon name={moment.icon as any} className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm text-muted-foreground mb-1">{moment.date}</p>
                    <h3 className="text-xl font-serif font-semibold text-foreground mb-2">{moment.title}</h3>
                    <p className="text-muted-foreground">{moment.description}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="letters" className="min-h-screen py-20 animate-fade-in-up">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-5xl font-serif font-bold text-primary text-glow mb-4">Письма Любви</h2>
            <p className="text-lg text-muted-foreground">Слова, идущие от сердца</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {letters.map((letter, index) => (
              <Card 
                key={letter.id}
                className="p-8 hover-scale cursor-pointer transition-all duration-300 hover:shadow-xl bg-card backdrop-blur-sm border-2 border-primary/10"
                style={{ animationDelay: `${index * 0.2}s` }}
                onClick={() => setSelectedLetter(letter.id)}
              >
                <Icon name="Mail" className="w-8 h-8 text-primary mb-4" />
                <h3 className="text-2xl font-serif font-semibold text-foreground mb-4">{letter.from}</h3>
                <p className="text-muted-foreground italic">{letter.preview}</p>
                <Button variant="ghost" className="mt-4 text-primary hover:text-primary/80">
                  Читать полностью
                  <Icon name="ArrowRight" className="ml-2 w-4 h-4" />
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <footer className="py-12 text-center bg-black/60 backdrop-blur-sm border-t border-primary/20">
        <div className="container mx-auto px-4">
          <Icon name="Heart" className="w-8 h-8 text-primary mx-auto mb-4 animate-float" />
          <p className="text-muted-foreground">
            Создано с любовью 💕
          </p>
        </div>
      </footer>

      <Dialog open={selectedImage !== null} onOpenChange={() => setSelectedImage(null)}>
        <DialogContent className="max-w-4xl">
          {selectedImage && (
            <div className="space-y-4">
              <img 
                src={gallery.find(img => img.id === selectedImage)?.url} 
                alt="Full size"
                className="w-full h-auto rounded-lg"
              />
              <p className="text-center text-lg font-medium">
                {gallery.find(img => img.id === selectedImage)?.caption}
              </p>
            </div>
          )}
        </DialogContent>
      </Dialog>

      <Dialog open={selectedLetter !== null} onOpenChange={() => setSelectedLetter(null)}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle className="text-2xl font-serif">
              {letters.find(l => l.id === selectedLetter)?.from}
            </DialogTitle>
          </DialogHeader>
          <div className="space-y-4 pt-4">
            <p className="text-foreground leading-relaxed">
              {letters.find(l => l.id === selectedLetter)?.content}
            </p>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Index;