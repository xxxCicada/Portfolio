const TEXTS = [
        'WEB - дизайном',
        'Backend разработкой',
        'Гейм - дизайном',
        'Frontend разработкой'
      ];

      const scrambler = new window.Scrambler();
      const handleScramble = (text) => {
        document.getElementById('text').innerHTML = text;
      }

      let i = 0;
      function printText() {
        scrambler.scramble(TEXTS[i % TEXTS.length], handleScramble); 
        setTimeout(printText, 3500);
        i++;
      }
      printText();