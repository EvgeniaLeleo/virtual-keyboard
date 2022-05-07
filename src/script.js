'use strict';

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
        'Backspace'
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
        'Del'
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
        'Enter'
      ],
      ['Shift', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/', '', 'Shift'],
      ['Ctrl', 'Win', 'Alt', ' ', 'Alt', 'Ctrl', '', '', '']
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
        'Backspace'
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
        'Del'
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
        'Enter'
      ],
      ['Shift', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', ',', '.', '/', '', 'Shift'],
      ['Ctrl', 'Win', 'Alt', ' ', 'Alt', 'Ctrl', '', '', '']
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
        'Backspace'
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
        'Del'
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
        'Enter'
      ],
      ['Shift', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', '<', '>', '?', '', 'Shift'],
      ['Ctrl', 'Win', 'Alt', ' ', 'Alt', 'Ctrl', '', '', '']
    ];

    this.keySymbolsRu = [
      [
        'ё',
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
        'Backspace'
      ],
      [
        'Tab',
        'й',
        'ц',
        'у',
        'к',
        'е',
        'н',
        'г',
        'ш',
        'щ',
        'з',
        'х',
        'ъ',
        '\\',
        'Del'
      ],
      [
        'Caps Lock',
        'ф',
        'ы',
        'в',
        'а',
        'п',
        'р',
        'о',
        'л',
        'д',
        'ж',
        'э',
        'Enter'
      ],
      ['Shift', 'я', 'ч', 'с', 'м', 'и', 'т', 'ь', 'б', 'ю', '.', '', 'Shift'],
      ['Ctrl', 'Win', 'Alt', ' ', 'Alt', 'Ctrl', '', '', '']
    ];

    this.keySymbolsRuCaps = [
      [
        'Ё',
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
        'Backspace'
      ],
      [
        'Tab',
        'Й',
        'Ц',
        'У',
        'К',
        'Е',
        'Н',
        'Г',
        'Ш',
        'Щ',
        'З',
        'Х',
        'Ъ',
        '\\',
        'Del'
      ],
      [
        'Caps Lock',
        'Ф',
        'Ы',
        'В',
        'А',
        'П',
        'Р',
        'О',
        'Л',
        'Д',
        'Ж',
        'З',
        'Enter'
      ],
      ['Shift', 'Я', 'Ч', 'С', 'М', 'И', 'Т', 'Ь', 'Б', 'Ю', '.', '', 'Shift'],
      ['Ctrl', 'Win', 'Alt', ' ', 'Alt', 'Ctrl', '', '', '']
    ];

    this.keySymbolsRuShift = [
      [
        'Ё',
        '!',
        '"',
        '№',
        ';',
        '%',
        ':',
        '?',
        '*',
        '(',
        ')',
        '_',
        '+',
        'Backspace'
      ],
      [
        'Tab',
        'Й',
        'Ц',
        'У',
        'К',
        'Е',
        'Н',
        'Г',
        'Ш',
        'Щ',
        'З',
        'Х',
        'Ъ',
        '/',
        'Del'
      ],
      [
        'Caps Lock',
        'Ф',
        'Ы',
        'В',
        'А',
        'П',
        'Р',
        'О',
        'Л',
        'Д',
        'Ж',
        'Э',
        'Enter'
      ],
      ['Shift', 'Я', 'Ч', 'С', 'М', 'И', 'Т', 'Ь', 'Б', 'Ю', ',', '', 'Shift'],
      ['Ctrl', 'Win', 'Alt', ' ', 'Alt', 'Ctrl', '', '', '']
    ];

    this.lineCodes = [
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
        'Backspace'
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
        'Delete'
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
        'Enter'
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
        'ShiftRight'
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
        'ArrowRight'
      ]
    ];

    this.caps = false;
    this.shift = false;
    this.language = localStorage.getItem('language') === 'ru' ? 'ru' : 'en';

    this.keyboardLayout = this.keyboardLayout.bind(this);
    this.shiftToggle = this.shiftToggle.bind(this);
    this.shiftOff = this.shiftOff.bind(this);
  }

  generateKeyboard() {
    const title = document.createElement('h1');
    title.classList.add('title');
    title.textContent = 'Virtual Keyboard';

    const textarea = document.createElement('textarea');
    textarea.rows = '3';
    textarea.classList.add('textarea');
    textarea.focus();

    const keyboard = document.createElement('div');
    keyboard.classList.add('keyboard');

    document.body.appendChild(title);
    document.body.appendChild(textarea);
    document.body.appendChild(keyboard);

    for (let line = 0; line < 5; line += 1) {
      const keyboardLine = document.createElement('div');
      keyboardLine.classList.add('keyboard__line');
      keyboard.appendChild(keyboardLine);
    }

    const keyboardLines = keyboard.querySelectorAll('.keyboard__line');

    for (let k = 0; k < keyboardLines.length; k += 1) {
      for (let i = 0; i < this.lineCodes[k].length; i += 1) {
        const button = document.createElement('div');
        button.classList.add('keyboard__button');
        keyboardLines[k].appendChild(button);
      }
    }

    const note1 = document.createElement('p');
    note1.classList.add('note');
    note1.innerHTML = 'The keyboard was created in the <b>Windows OS</b>';
    const note2 = document.createElement('p');

    note2.classList.add('note', 'note_mb');
    note2.innerHTML = 'To switch the language layout press <b>Alt + Ctrl</b>';

    document.body.appendChild(note1);
    document.body.appendChild(note2);

    this.keyboardLayout();
    this.setButtonsClass();
    this.pressAnimation();
    this.buttonsHighlight();
    this.keydownAddText();
    this.buttonsAddText();
    this.shiftOff();

    textarea.selectionStart = 0;
    textarea.selectionEnd = 0;
    textarea.focus();
  }

  // заполнение клавиш символами
  keyboardLayout() {
    const keyboard = document.querySelector('.keyboard');
    const keyboardLines = keyboard.querySelectorAll('.keyboard__line');
    const button = keyboard.querySelectorAll('.keyboard__button');
    let number;

    if (this.language === 'en') {
      if (!this.caps) {
        number = 0;

        for (let k = 0; k < keyboardLines.length; k += 1) {
          for (let i = 0; i < this.lineCodes[k].length; i += 1) {
            button[number].textContent = this.keySymbolsEn[k][i];
            number += 1;
          }
        }
      }

      if (this.caps) {
        number = 0;

        for (let k = 0; k < keyboardLines.length; k += 1) {
          for (let i = 0; i < this.lineCodes[k].length; i += 1) {
            button[number].textContent = this.keySymbolsEnCaps[k][i];
            number += 1;
          }
        }
      }

      if (this.shift) {
        number = 0;
        for (let k = 0; k < keyboardLines.length; k += 1) {
          for (let i = 0; i < this.lineCodes[k].length; i += 1) {
            button[number].textContent = this.keySymbolsEnShift[k][i];
            number += 1;
          }
        }
      }
    }

    if (this.language === 'ru') {
      if (!this.caps) {
        number = 0;

        for (let k = 0; k < keyboardLines.length; k += 1) {
          for (let i = 0; i < this.lineCodes[k].length; i += 1) {
            button[number].textContent = this.keySymbolsRu[k][i];
            number += 1;
          }
        }
      }

      if (this.caps) {
        number = 0;

        for (let k = 0; k < keyboardLines.length; k += 1) {
          for (let i = 0; i < this.lineCodes[k].length; i += 1) {
            button[number].textContent = this.keySymbolsRuCaps[k][i];
            number += 1;
          }
        }
      }

      if (this.shift) {
        number = 0;

        for (let k = 0; k < keyboardLines.length; k += 1) {
          for (let i = 0; i < this.lineCodes[k].length; i += 1) {
            button[number].textContent = this.keySymbolsRuShift[k][i];
            number += 1;
          }
        }
      }
    }

    if (keyboard.querySelector('.btn__arr')) {
      const btnArrUp = keyboard.querySelector('.btn__arr-up');
      btnArrUp.innerHTML = '▲';

      const btnArrLeft = keyboard.querySelector('.btn__arr-left');
      btnArrLeft.innerHTML = '◄';

      const btnArrDown = keyboard.querySelector('.btn__arr-down');
      btnArrDown.innerHTML = '▼';

      const btnArrRight = keyboard.querySelector('.btn__arr-right');
      btnArrRight.innerHTML = '►';
    }
  }

  setButtonsClass() {
    this.keyboard = document.querySelector('.keyboard');

    const btnWithChars = this.keyboard.querySelectorAll('.keyboard__button');
    btnWithChars.forEach((btn) => {
      if (
        ![
          'Backspace',
          'Del',
          'Caps Lock',
          'Enter',
          'Shift',
          'Ctrl',
          'Win',
          'Alt'
        ].includes(btn.textContent)
      ) {
        btn.classList.add('btn__char');
      }
    });

    const btnBackspace = this.keyboard.querySelectorAll('.keyboard__button')[13];
    btnBackspace.classList.add('btn__backspace');

    const btnTab = this.keyboard.querySelectorAll('.keyboard__button')[14];
    btnTab.classList.add('btn__tab');

    const btnDel = this.keyboard.querySelectorAll('.keyboard__button')[28];
    btnDel.classList.add('btn__del');

    const btnCaps = this.keyboard.querySelectorAll('.keyboard__button')[29];
    btnCaps.classList.add('btn__caps');

    const btnEnter = this.keyboard.querySelectorAll('.keyboard__button')[41];
    btnEnter.classList.add('btn__enter');

    const btnShiftL = this.keyboard.querySelectorAll('.keyboard__button')[42];
    btnShiftL.classList.add('btn__shift-l', 'btn__shift');

    const btnShiftR = this.keyboard.querySelectorAll('.keyboard__button')[54];
    btnShiftR.classList.add('btn__shift-r', 'btn__shift');

    const btnCtrlL = this.keyboard.querySelectorAll('.keyboard__button')[55];
    btnCtrlL.classList.add('btn__ctrl-l', 'btn__ctrl');

    const btnCtrlR = this.keyboard.querySelectorAll('.keyboard__button')[60];
    btnCtrlR.classList.add('btn__ctrl-r', 'btn__ctrl');

    const btnWin = this.keyboard.querySelectorAll('.keyboard__button')[56];
    btnWin.classList.add('btn__win');

    const btnAltL = this.keyboard.querySelectorAll('.keyboard__button')[57];
    btnAltL.classList.add('btn__alt-l', 'btn__alt');

    const btnAltR = this.keyboard.querySelectorAll('.keyboard__button')[59];
    btnAltR.classList.add('btn__alt-r', 'btn__alt');

    const btnSpace = this.keyboard.querySelectorAll('.keyboard__button')[58];
    btnSpace.classList.add('btn__space');

    const btnArrUp = this.keyboard.querySelectorAll('.keyboard__button')[53];
    btnArrUp.classList.add('btn__arr-up', 'btn__arr');
    btnArrUp.innerHTML = '▲';

    const btnArrLeft = this.keyboard.querySelectorAll('.keyboard__button')[61];
    btnArrLeft.classList.add('btn__arr-left', 'btn__arr');
    btnArrLeft.innerHTML = '◄';

    const btnArrDown = this.keyboard.querySelectorAll('.keyboard__button')[62];
    btnArrDown.classList.add('btn__arr-down', 'btn__arr');
    btnArrDown.innerHTML = '▼';

    const btnArrRight = this.keyboard.querySelectorAll('.keyboard__button')[63];
    btnArrRight.classList.add('btn__arr-right', 'btn__arr');
    btnArrRight.innerHTML = '►';
  }

  pressAnimation() {
    this.buttons = document.querySelectorAll('.keyboard__button');

    this.buttons.forEach((btn) => btn.addEventListener('click', () => {
      const button = btn;

      button.style.transform = 'translateY(2px)';
      button.style.boxShadow = '-1px -1px 3px rgba(0, 0, 0, 0.6)';

      function btnTransit() {
        button.style.transform = 'translateY(0px)';
        button.style.boxShadow = '1px 1px 5px rgba(0, 0, 0, 0.5)';
      }

      setTimeout(btnTransit, 50);
    }));
  }

  // подсветка клавиш при нажатии на реальной клавиатуре
  buttonsHighlight() {
    const keyboardLine = document.querySelectorAll('.keyboard__line');

    document.addEventListener('keydown', (event) => {
      const textarea = document.querySelector('.textarea');
      textarea.focus();

      for (let line = 0; line < 5; line += 1) {
        const buttonsLine = keyboardLine[line].querySelectorAll('.keyboard__button');

        for (let i = 0; i < buttonsLine.length; i += 1) {
          if (event.code === this.lineCodes[line][i]) {
            buttonsLine[i].style.background = 'rgb(125, 176, 208)';
            buttonsLine[i].style.boxShadow = '0 0 15px rgba(125, 176, 208, 0.3)';
            buttonsLine[i].style.transform = 'translateY(2px)';

            const btnTransit = () => {
              buttonsLine[i].style.background = '#708090';
              buttonsLine[i].style.boxShadow = '1px 1px 5px rgba(0, 0, 0, 0.5)';
              buttonsLine[i].style.transform = 'translateY(0px)';
            };

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

  // набор текста с реальной клавиатуры
  keydownAddText() {
    document.addEventListener('keydown', (event) => {
      const textarea = document.querySelector('.textarea');
      const keyboardLine = document.querySelectorAll('.keyboard__line');

      if (
        ![
          'Backspace',
          'Delete',
          'CapsLock',
          'Enter',
          'MetaLeft',
          'ShiftLeft',
          'ShiftRight',
          'ControlLeft',
          'ControlRight',
          'AltLeft',
          'AltRight'
        ].includes(event.code)
      ) {
        event.preventDefault();

        for (let line = 0; line < 5; line += 1) {
          const buttonsLine = keyboardLine[line].querySelectorAll('.keyboard__button');

          for (let i = 0; i < buttonsLine.length; i += 1) {
            if (event.code === this.lineCodes[line][i]) {
              let newChar = buttonsLine[i].textContent;

              if (event.code === 'Tab') {
                newChar = '    ';
              }

              textarea.setRangeText(
                newChar,
                textarea.selectionStart,
                textarea.selectionEnd,
                'end'
              );
            }
          }
        }
      }

      if (event.code === 'CapsLock') {
        const btnCaps = keyboardLine[2].querySelectorAll('.keyboard__button')[0];

        this.caps = !this.caps;
        this.keyboardLayout();

        btnCaps.classList.toggle('active');
      }

      if (event.shiftKey) {
        if (event.code === 'ShiftLeft') {
          const buttonShiftL = document.querySelectorAll('.btn__shift')[0];

          buttonShiftL.classList.toggle('active');
          this.shift = !this.shift;
          this.keyboardLayout();
        }

        if (event.code === 'ShiftRight') {
          const buttonShiftR = document.querySelectorAll('.btn__shift')[1];

          buttonShiftR.classList.toggle('active');
          this.shift = !this.shift;
          this.keyboardLayout();
        }
      }

      if (event.ctrlKey && event.altKey) {
        event.preventDefault();

        this.language = this.language === 'en' ? 'ru' : 'en';
        localStorage.setItem('language', this.language);
        this.keyboardLayout();
      }
    });
  }

  shiftOff() {
    document.addEventListener('keyup', (event) => {
      if (event.code === 'ShiftLeft') {
        const buttonShiftL = document.querySelectorAll('.btn__shift')[0];

        buttonShiftL.classList.toggle('active');
        this.shift = !this.shift;
        this.keyboardLayout();
      }

      if (event.code === 'ShiftRight') {
        const buttonShiftR = document.querySelectorAll('.btn__shift')[1];

        buttonShiftR.classList.toggle('active');
        this.shift = !this.shift;
        this.keyboardLayout();
      }
    });
  }

  // набор текста на виртуальной клавиатуре
  buttonsAddText() {
    const textarea = document.querySelector('.textarea');
    const buttons = document.querySelectorAll('.keyboard__button');
    const buttonsChar = document.querySelectorAll('.btn__char');

    buttonsChar.forEach((btn) => {
      btn.addEventListener('click', () => {
        textarea.focus();

        let newChar = btn.textContent;

        if (btn.textContent === 'Tab') {
          newChar = '    ';
        }

        textarea.setRangeText(
          newChar,
          textarea.selectionStart,
          textarea.selectionEnd,
          'end'
        );
      });
    });

    buttons.forEach((btn) => btn.addEventListener('click', (event) => {
      if (event.target.textContent === 'Caps Lock') {
        this.caps = !this.caps;
        this.keyboardLayout();

        event.target.classList.toggle('active');
      }

      if (event.target.textContent === 'Shift') {
        this.shiftToggle(event.target);
        setTimeout(this.shiftToggle, 500, event.target);
      }

      if (event.target.textContent === 'Backspace') {
        const carPos = textarea.selectionStart;

        if (carPos !== 0) {
          let text = textarea.value;

          text = text.slice(0, carPos - 1) + text.slice(carPos);
          textarea.value = text;
          textarea.selectionStart = carPos - 1;
          textarea.selectionEnd = carPos - 1;
        } else {
          textarea.selectionStart = carPos;
          textarea.selectionEnd = carPos;
        }
        textarea.focus();
      }

      if (event.target.textContent === 'Del') {
        const carPos = textarea.selectionStart;
        let text = textarea.value;
        let len = text.length;

        if (carPos !== len) {
          text = text.slice(0, carPos) + text.slice(carPos + 1);
          textarea.value = text;
        }

        textarea.selectionStart = carPos;
        textarea.selectionEnd = carPos;
        textarea.focus();
      }

      if (event.target.textContent === 'Enter') {
        const carPos = textarea.selectionStart;

        textarea.setRangeText(
          '\n',
          textarea.selectionStart,
          textarea.selectionEnd,
          'end'
        );

        textarea.selectionStart = carPos + 1;
        textarea.selectionEnd = carPos + 1;
        textarea.focus();
      }
    }));
  }

  shiftToggle(target) {
    target.classList.toggle('active');
    this.shift = !this.shift;
    this.keyboardLayout();
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const keyBrd = new Keyboard();
  keyBrd.generateKeyboard();
});
