document.addEventListener('DOMContentLoaded', () => {
  const textarea = document.createElement('textarea');
  textarea.rows = '10';
  textarea.classList.add('textarea');

  const keyboard = document.createElement('div');
  keyboard.classList.add('keyboard');

  document.body.appendChild(textarea);
  document.body.appendChild(keyboard);
  // const arr =
  //   '`1234567890-=btqwertyuiop[]\\dcasdfghjkl;kesszxcvbnm,./uscwasacaaa.'.split(
  //     ''
  //   );

  // console.log(arr);

  const keySymbols = [
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
    ['Shift', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/', 'u', 'Shift'],
    ['Ctrl', 'Win', 'Alt', '', 'Alt', 'Ctrl', '<', 'v', '>'],
  ];

  for (let line = 0; line < 5; line++) {
    const line = document.createElement('div');
    line.classList.add('keyboard__line');
    keyboard.appendChild(line);
  }

  const keyboardLine0 = keyboard.querySelectorAll('.keyboard__line')[0];
  for (let i = 0; i < keySymbols[0].length; i++) {
    const button = document.createElement('div');
    button.classList.add('keyboard__button');
    keyboardLine0.appendChild(button);
    button.textContent = keySymbols[0][i];
  }

  const keyboardLine1 = keyboard.querySelectorAll('.keyboard__line')[1];
  for (let i = 0; i < keySymbols[1].length; i++) {
    const button = document.createElement('div');
    button.classList.add('keyboard__button');
    keyboardLine1.appendChild(button);
    button.textContent = keySymbols[1][i];
  }

  const keyboardLine2 = keyboard.querySelectorAll('.keyboard__line')[2];
  for (let i = 0; i < keySymbols[2].length; i++) {
    const button = document.createElement('div');
    button.classList.add('keyboard__button');
    keyboardLine2.appendChild(button);
    button.textContent = keySymbols[2][i];
  }

  const keyboardLine3 = keyboard.querySelectorAll('.keyboard__line')[3];
  for (let i = 0; i < keySymbols[3].length; i++) {
    const button = document.createElement('div');
    button.classList.add('keyboard__button');
    keyboardLine3.appendChild(button);
    button.textContent = keySymbols[3][i];
  }

  const keyboardLine4 = keyboard.querySelectorAll('.keyboard__line')[4];
  for (let i = 0; i < keySymbols[4].length; i++) {
    const button = document.createElement('div');
    button.classList.add('keyboard__button');
    keyboardLine4.appendChild(button);
    button.textContent = keySymbols[4][i];
  }

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
  btnArrLeft.classList.add('btn__arr-left');

  const btnArrDown = keyboard.querySelectorAll('.keyboard__button')[62];
  btnArrDown.classList.add('btn__arr-down');

  const btnArrRight = keyboard.querySelectorAll('.keyboard__button')[63];
  btnArrRight.classList.add('btn__arr-right');
});
