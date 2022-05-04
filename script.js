document.addEventListener('DOMContentLoaded', () => {
  class Keyboard {
    constructor() {
      this.keySymbols = [
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
        ['Ctrl', 'Win', 'Alt', '', 'Alt', 'Ctrl', '', '', ''],
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
      // this.line0 = [192, 49, 50, 51, 52, 53, 54, 55, 56, 57, 48, 189, 187, 8];
      // this.line1 = [
      //   9, 81, 87, 69, 82, 84, 89, 85, 73, 79, 80, 219, 221, 220, 46,
      // ];
      // this.line2 = [20, 65, 83, 68, 70, 71, 72, 74, 75, 76, 186, 222, 13];
      // this.line3 = [16, 90, 88, 67, 86, 66, 78, 77, 188, 190, 191, 38, 16];
      // this.line4 = [17, 91, 18, 32, 18, 17, 37, 40, 39];
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

      const keyboardLine0 = keyboard.querySelectorAll('.keyboard__line')[0];
      for (let i = 0; i < this.keySymbols[0].length; i++) {
        const button = document.createElement('div');
        button.classList.add('keyboard__button');
        keyboardLine0.appendChild(button);
        button.textContent = this.keySymbols[0][i];
      }

      const keyboardLine1 = keyboard.querySelectorAll('.keyboard__line')[1];
      for (let i = 0; i < this.keySymbols[1].length; i++) {
        const button = document.createElement('div');
        button.classList.add('keyboard__button');
        keyboardLine1.appendChild(button);
        button.textContent = this.keySymbols[1][i];
      }

      const keyboardLine2 = keyboard.querySelectorAll('.keyboard__line')[2];
      for (let i = 0; i < this.keySymbols[2].length; i++) {
        const button = document.createElement('div');
        button.classList.add('keyboard__button');
        keyboardLine2.appendChild(button);
        button.textContent = this.keySymbols[2][i];
      }

      const keyboardLine3 = keyboard.querySelectorAll('.keyboard__line')[3];
      for (let i = 0; i < this.keySymbols[3].length; i++) {
        const button = document.createElement('div');
        button.classList.add('keyboard__button');
        keyboardLine3.appendChild(button);
        button.textContent = this.keySymbols[3][i];
      }

      const keyboardLine4 = keyboard.querySelectorAll('.keyboard__line')[4];
      for (let i = 0; i < this.keySymbols[4].length; i++) {
        const button = document.createElement('div');
        button.classList.add('keyboard__button');
        keyboardLine4.appendChild(button);
        button.textContent = this.keySymbols[4][i];
      }
    }

    setButtonsClass() {
      const keyboard = document.querySelector('.keyboard');

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

      const btnArrUp = keyboard.querySelectorAll('.keyboard__button')[53];
      btnArrUp.classList.add('btn__arr-up');

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

      const btnArrLeft = keyboard.querySelectorAll('.keyboard__button')[61];
      btnArrLeft.classList.add('btn__arr-left', 'btn__arr');

      const btnArrDown = keyboard.querySelectorAll('.keyboard__button')[62];
      btnArrDown.classList.add('btn__arr-down', 'btn__arr');

      const btnArrRight = keyboard.querySelectorAll('.keyboard__button')[63];
      btnArrRight.classList.add('btn__arr-right', 'btn__arr');
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
        for (let line = 0; line < 5; line++) {
          const buttonsLine =
            keyboardLine[line].querySelectorAll('.keyboard__button');

          for (let i = 0; i < buttonsLine.length; i++) {
            if (event.code === this.lineCodesEn[line][i]) {
              buttonsLine[i].style.background = 'rgb(125, 176, 208)';
              buttonsLine[i].style.boxShadow =
                '0 0 10px rgba(125, 176, 208, 0.3)';

              function btnTransit() {
                buttonsLine[i].style.background = '#708090';
                buttonsLine[i].style.boxShadow =
                  '1px 1px 5px rgba(0, 0, 0, 0.5)';
              }

              setTimeout(btnTransit, 100);
            }
          }
        }
      });
    }
  }

  const keyBrd = new Keyboard();

  keyBrd.generateKeyboard();
  keyBrd.setButtonsClass();
  document.querySelector('.textarea').focus();
  keyBrd.pressAnimation();
  keyBrd.buttonsHighlight();

  // const arr =
  //   '`1234567890-=btqwertyuiop[]\\dcasdfghjkl;kesszxcvbnm,./uscwasacaaa.'.split(
  //     ''
  //   );

  // console.log(arr);

  // массив кодов кнопок клавиатуры
  // let arr = [];
  // function keyPress(e) {
  //   let keyNum;
  //   if (window.event) {
  //     keyNum = window.event.keyCode;
  //   } else if (e) {
  //     keyNum = e.which;
  //   }
  //   arr.push(keyNum);
  //   console.log(arr);
  // }
  // document.onkeydown = keyPress;

  // function pressAnimationRealKeyboard() {
  //   const buttons = document.querySelectorAll('.keyboard__button');

  // }

  // let arr = [];
  // document.addEventListener('keydown', function (event) {
  //   arr.push(event.code);
  //   console.log(arr);
  // });
});
