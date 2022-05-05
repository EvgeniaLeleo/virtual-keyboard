document.addEventListener('DOMContentLoaded', () => {
  class Keyboard {
    constructor() {
      this.keySymbolsEn = [
        [
          '`',
          '1',
          '2',
          '3',
          '4',
          '5',
          '6',
          '7',
          '8',
          '9',
          '0',
          '-',
          '=',
          'Backspace',
        ],
        [
          'Tab',
          'q',
          'w',
          'e',
          'r',
          't',
          'y',
          'u',
          'i',
          'o',
          'p',
          '[',
          ']',
          '\\',
          'Del',
        ],
        [
          'Caps Lock',
          'a',
          's',
          'd',
          'f',
          'g',
          'h',
          'j',
          'k',
          'l',
          ';',
          '"',
          'Enter',
        ],
        [
          'Shift',
          'z',
          'x',
          'c',
          'v',
          'b',
          'n',
          'm',
          ',',
          '.',
          '/',
          '',
          'Shift',
        ],
        ['Ctrl', 'Win', 'Alt', ' ', 'Alt', 'Ctrl', '', '', ''],
      ];

      this.keySymbolsEnCaps = [
        [
          '`',
          '1',
          '2',
          '3',
          '4',
          '5',
          '6',
          '7',
          '8',
          '9',
          '0',
          '-',
          '=',
          'Backspace',
        ],
        [
          'Tab',
          'Q',
          'W',
          'E',
          'R',
          'T',
          'Y',
          'U',
          'I',
          'O',
          'P',
          '[',
          ']',
          '\\',
          'Del',
        ],
        [
          'Caps Lock',
          'A',
          'S',
          'D',
          'F',
          'G',
          'H',
          'J',
          'K',
          'L',
          ';',
          '"',
          'Enter',
        ],
        [
          'Shift',
          'Z',
          'X',
          'C',
          'V',
          'B',
          'N',
          'M',
          ',',
          '.',
          '/',
          '',
          'Shift',
        ],
        ['Ctrl', 'Win', 'Alt', ' ', 'Alt', 'Ctrl', '', '', ''],
      ];

      this.keySymbolsEnShift = [
        [
          '~',
          '!',
          '@',
          '#',
          '$',
          '%',
          '^',
          '&',
          '*',
          '(',
          ')',
          '_',
          '+',
          'Backspace',
        ],
        [
          'Tab',
          'Q',
          'W',
          'E',
          'R',
          'T',
          'Y',
          'U',
          'I',
          'O',
          'P',
          '{',
          '}',
          '|',
          'Del',
        ],
        [
          'Caps Lock',
          'A',
          'S',
          'D',
          'F',
          'G',
          'H',
          'J',
          'K',
          'L',
          ':',
          '"',
          'Enter',
        ],
        ['Shift', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', '<', '>', '?', 'Shift'],
        ['Ctrl', 'Win', 'Alt', ' ', 'Alt', 'Ctrl', '', '', ''],
      ];

      this.lineCodesEn = [
        [
          'Backquote',
          'Digit1',
          'Digit2',
          'Digit3',
          'Digit4',
          'Digit5',
          'Digit6',
          'Digit7',
          'Digit8',
          'Digit9',
          'Digit0',
          'Minus',
          'Equal',
          'Backspace',
        ],
        [
          'Tab',
          'KeyQ',
          'KeyW',
          'KeyE',
          'KeyR',
          'KeyT',
          'KeyY',
          'KeyU',
          'KeyI',
          'KeyO',
          'KeyP',
          'BracketLeft',
          'BracketRight',
          'Backslash',
          'Delete',
        ],
        [
          'CapsLock',
          'KeyA',
          'KeyS',
          'KeyD',
          'KeyF',
          'KeyG',
          'KeyH',
          'KeyJ',
          'KeyK',
          'KeyL',
          'Semicolon',
          'Quote',
          'Enter',
        ],
        [
          'ShiftLeft',
          'KeyZ',
          'KeyX',
          'KeyC',
          'KeyV',
          'KeyB',
          'KeyN',
          'KeyM',
          'Comma',
          'Period',
          'Slash',
          'ArrowUp',
          'ShiftRight',
        ],
        [
          'ControlLeft',
          'MetaLeft',
          'AltLeft',
          'Space',
          'AltRight',
          'ControlRight',
          'ArrowLeft',
          'ArrowDown',
          'ArrowRight',
        ],
      ];

      this.caps = false;
      this.language = localStorage.getItem('language') === 'ru' ? 'ru' : 'en';
    }

    generateKeyboard() {
      const textarea = document.createElement('textarea');
      textarea.rows = '7';
      textarea.classList.add('textarea');
      textarea.focus();

      const keyboard = document.createElement('div');
      keyboard.classList.add('keyboard');

      document.body.appendChild(textarea);
      document.body.appendChild(keyboard);

      for (let line = 0; line < 5; line++) {
        const line = document.createElement('div');
        line.classList.add('keyboard__line');
        keyboard.appendChild(line);
      }

      const keyboardLines = keyboard.querySelectorAll('.keyboard__line');

      for (let k = 0; k < keyboardLines.length; k++) {
        for (let i = 0; i < this.keySymbolsEn[k].length; i++) {
          const button = document.createElement('div');
          button.classList.add('keyboard__button');
          keyboardLines[k].appendChild(button);
        }
      }
    }

    // заполнение клавиш
    keyboardLayout() {
      const keyboard = document.querySelector('.keyboard');
      const keyboardLines = keyboard.querySelectorAll('.keyboard__line');
      const button = keyboard.querySelectorAll('.keyboard__button');
      let number = 0;

      if (!this.caps) {
        for (let k = 0; k < keyboardLines.length; k++) {
          for (let i = 0; i < this.keySymbolsEn[k].length; i++) {
            button[number].textContent = this.keySymbolsEn[k][i];
            number++;
          }
        }
      }

      if (this.caps) {
        for (let k = 0; k < keyboardLines.length; k++) {
          for (let i = 0; i < this.keySymbolsEn[k].length; i++) {
            button[number].textContent = this.keySymbolsEnCaps[k][i];
            number++;
          }
        }
      }

      if (keyboard.querySelector('.btn__arr')) {
        const btnArrUp = keyboard.querySelector('.btn__arr-up');
        btnArrUp.innerHTML = '&#129049;';

        const btnArrLeft = keyboard.querySelector('.btn__arr-left');
        btnArrLeft.innerHTML = '&#129064;';

        const btnArrDown = keyboard.querySelector('.btn__arr-down');
        btnArrDown.innerHTML = '&#129067;';

        const btnArrRight = keyboard.querySelector('.btn__arr-right');
        btnArrRight.innerHTML = '&#10142;';
      }
    }

    setButtonsClass() {
      const keyboard = document.querySelector('.keyboard');

      const btnWithChars = keyboard.querySelectorAll('.keyboard__button');
      btnWithChars.forEach((btn) => {
        if (
          ![
            'Backspace',
            'Tab',
            'Del',
            'Caps Lock',
            'Enter',
            'Shift',
            'Ctrl',
            'Win',
            'Alt',
          ].includes(btn.textContent)
        ) {
          btn.classList.add('btn__char');
        }
      });

      const btnBackspace = keyboard.querySelectorAll('.keyboard__button')[13];
      btnBackspace.classList.add('btn__backspace');

      const btnTab = keyboard.querySelectorAll('.keyboard__button')[14];
      btnTab.classList.add('btn__tab');

      const btnDel = keyboard.querySelectorAll('.keyboard__button')[28];
      btnDel.classList.add('btn__del');

      const btnCaps = keyboard.querySelectorAll('.keyboard__button')[29];
      btnCaps.classList.add('btn__caps');

      const btnEnter = keyboard.querySelectorAll('.keyboard__button')[41];
      btnEnter.classList.add('btn__enter');

      const btnShiftL = keyboard.querySelectorAll('.keyboard__button')[42];
      btnShiftL.classList.add('btn__shift-l', 'btn__shift');

      const btnShiftR = keyboard.querySelectorAll('.keyboard__button')[54];
      btnShiftR.classList.add('btn__shift-r', 'btn__shift');

      const btnCtrlL = keyboard.querySelectorAll('.keyboard__button')[55];
      btnCtrlL.classList.add('btn__ctrl-l', 'btn__ctrl');

      const btnWin = keyboard.querySelectorAll('.keyboard__button')[56];
      btnWin.classList.add('btn__win');

      const btnAltL = keyboard.querySelectorAll('.keyboard__button')[57];
      btnAltL.classList.add('btn__alt-l', 'btn__alt');

      const btnSpace = keyboard.querySelectorAll('.keyboard__button')[58];
      btnSpace.classList.add('btn__space');

      const btnAltR = keyboard.querySelectorAll('.keyboard__button')[59];
      btnAltR.classList.add('btn__alt-r', 'btn__alt');

      const btnCtrlR = keyboard.querySelectorAll('.keyboard__button')[60];
      btnCtrlR.classList.add('btn__ctrl-r', 'btn__ctrl');

      const btnArrUp = keyboard.querySelectorAll('.keyboard__button')[53];
      btnArrUp.classList.add('btn__arr-up', 'btn__arr');
      btnArrUp.innerHTML = '&#129049;';

      const btnArrLeft = keyboard.querySelectorAll('.keyboard__button')[61];
      btnArrLeft.classList.add('btn__arr-left', 'btn__arr');
      btnArrLeft.innerHTML = '&#129064;';

      const btnArrDown = keyboard.querySelectorAll('.keyboard__button')[62];
      btnArrDown.classList.add('btn__arr-down', 'btn__arr');
      btnArrDown.innerHTML = '&#129067;';

      const btnArrRight = keyboard.querySelectorAll('.keyboard__button')[63];
      btnArrRight.classList.add('btn__arr-right', 'btn__arr');
      btnArrRight.innerHTML = '&#10142;';
    }

    pressAnimation() {
      const buttons = document.querySelectorAll('.keyboard__button');
      buttons.forEach((btn) =>
        btn.addEventListener('click', () => {
          btn.style.transform = 'translateY(2px)';
          btn.style.boxShadow = '-1px -1px 3px rgba(0, 0, 0, 0.6)';

          function btnTransit() {
            btn.style.transform = 'translateY(0px)';
            btn.style.boxShadow = '1px 1px 5px rgba(0, 0, 0, 0.5)';
          }

          setTimeout(btnTransit, 50);
        })
      );
    }

    // подсветка клавиш при нажатии на реальной клавиатуре
    buttonsHighlight() {
      const keyboardLine = document.querySelectorAll('.keyboard__line');

      document.addEventListener('keydown', (event) => {
        const textarea = document.querySelector('.textarea');
        textarea.focus();

        if (event.code === 'CapsLock') {
          const btnCaps =
            keyboardLine[2].querySelectorAll('.keyboard__button')[0];

          this.caps = !this.caps;
          this.keyboardLayout();
          const toggle = this.caps ? 'add' : 'remove';
          btnCaps.classList[toggle]('hover');
        }

        for (let line = 0; line < 5; line++) {
          const buttonsLine =
            keyboardLine[line].querySelectorAll('.keyboard__button');

          for (let i = 0; i < buttonsLine.length; i++) {
            if (event.code === this.lineCodesEn[line][i]) {
              buttonsLine[i].style.background = 'rgb(125, 176, 208)';
              buttonsLine[i].style.boxShadow =
                '0 0 10px rgba(125, 176, 208, 0.3)';
              buttonsLine[i].style.transform = 'translateY(2px)';

              function btnTransit() {
                buttonsLine[i].style.background = '#708090';
                buttonsLine[i].style.boxShadow =
                  '1px 1px 5px rgba(0, 0, 0, 0.5)';
                buttonsLine[i].style.transform = 'translateY(0px)';
              }

              setTimeout(btnTransit, 100);
            }

            // сохранение hover эффекта после перезаписи стилей выше
            buttonsLine[i].addEventListener('mouseover', () => {
              buttonsLine[i].classList.add('hover');
            });

            buttonsLine[i].addEventListener('mouseleave', () => {
              buttonsLine[i].classList.remove('hover');
            });
          }
        }
      });
    }

    // набор текста по виртуальным кнопкам
    buttonsAddText() {
      const textarea = document.querySelector('.textarea');
      const buttonsChar = document.querySelectorAll('.btn__char');

      buttonsChar.forEach((btn) => {
        btn.addEventListener('click', (event) => {
          textarea.focus();
          textarea.value += btn.textContent;
        });
      });

      const buttons = document.querySelectorAll('.keyboard__button');
      buttons.forEach((btn) =>
        btn.addEventListener('click', (event) => {
          if (event.target.textContent === 'Caps Lock') {
            this.caps = !this.caps;
            this.keyboardLayout();

            const toggle = this.caps ? 'add' : 'remove';
            event.target.classList[toggle]('hover');
          }

          if (event.target.textContent === 'Backspace') {
            const carPos = this.getCaretPosition(textarea);
            if (carPos !== 0) {
              let text = textarea.value;
              text = text.slice(0, carPos - 1) + text.slice(carPos);
              textarea.value = text;
              this.setCaretPosition(textarea, carPos - 1);
            } else {
              this.setCaretPosition(textarea, carPos);
            }
          }

          if (event.target.textContent === 'Del') {
            const carPos = this.getCaretPosition(textarea);
            let text = textarea.value;
            let len = text.length;

            if (carPos !== len) {
              text = text.slice(0, carPos) + text.slice(carPos + 1);
              textarea.value = text;
              this.setCaretPosition(textarea, carPos);
            } else {
              this.setCaretPosition(textarea, carPos);
            }
          }
        })
      );
    }

    getCaretPosition(elem) {
      var caretPos = 0;

      if (document.selection) {
        // ie
        elem.focus();
        var range = document.selection.createRange();
        elem.moveStart('character', -elem.value.length);
        caretPos = range.text.length;
      } else if (elem.selectionStart || elem.selectionStart == '0') {
        // Mozilla
        caretPos = elem.selectionStart;
      }

      return caretPos;
    }

    setCaretPosition(input, caretPos) {
      if (document.selection) {
        // ie
        input.focus();
        const range = document.selection.createRange();
        range.moveStart('character', -input.value.length);
        range.moveStart('character', caretPos);
        range.moveEnd('character', 0);
        range.select();
      } else if (input.selectionStart || input.selectionStart == '0') {
        // Mozilla
        input.selectionStart = caretPos;
        input.selectionEnd = caretPos;
        input.focus();
      }
    }
  }

  const keyBrd = new Keyboard();

  keyBrd.generateKeyboard();
  keyBrd.keyboardLayout();
  keyBrd.setButtonsClass();
  document.querySelector('.textarea').focus();
  keyBrd.pressAnimation();
  keyBrd.buttonsHighlight();
  keyBrd.buttonsAddText();
});

// const arr =
//   '`1234567890-=btqwertyuiop[]\\dcasdfghjkl;kesszxcvbnm,./uscwasacaaa.'.split(
//     ''
//   );

// const arr =
//   '~!@#$%^&*()_+b   tQWERTYUIOP{}|   cASDFGHJKL:"e   sZXCVBNM<>?s'.split('');
// console.log(arr);

// let arr = [];
// document.addEventListener('keydown', function (event) {
//   arr.push(event.code);
//   console.log(arr);
// });
