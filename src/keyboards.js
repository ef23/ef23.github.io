import React from 'react';

import hex3c_wkl from './images/keebs/hex3cwkl.jpg'
import leaf60_ewhite from './images/keebs/leaf60ewhite.jpg'
import leaf60 from './images/keebs/leaf60.jpg'
import brutal60 from './images/keebs/brutal60.jpg'
import kbd67pc from './images/keebs/kbd67pc.jpg'
import savage65 from './images/keebs/savage65.jpg'
import nk65v2 from './images/keebs/nk65v2.jpg'
import kbd67gray from './images/keebs/kbd67gray.jpg'

import './index.css';
import './keyboards.css';

const keyboards = {
  header: 'Keyboards',
  boards: [
    [
      {
        img: hex3c_wkl,
        name: 'Hex.3C',
        description: 'WKL E-White',
        switches: 'NK Silk Yellows',
        keycaps: 'GMK Bingsu',
        current: true,
      },
      {
        img: leaf60_ewhite,
        name: 'Leaf60',
        description: 'WK E-White',
        switches: 'Mauves',
        keycaps: 'GMK Olive',
        current: false,
      },
      {
        img: leaf60,
        name: 'Leaf60',
        description: 'WK Polycarbonate',
        switches: 'C3 Tangerines',
        keycaps: 'GMK Olivia++',
        current: false,
      },
      {
        img: brutal60,
        name: 'Brutal60',
        description: 'R3 Navy',
        switches: 'Alpacas',
        keycaps: 'GMK Mizu',
      },
    ],
    [
      {
        img: kbd67pc,
        name: 'KBD67v2 MkII',
        description: 'Hotswap Polycarbonate',
        switches: 'C3 Tangerines',
        keycaps: 'GMK Cafe',
      },
      {
        img: savage65,
        name: 'Savage65',
        description: 'R2.2 Black',
        switches: 'NovelKeys_ Creams',
        keycaps: 'ePBT x GoK BoW',
      },
    ],
  ],
}

const other_builds = {
  header: 'Other Builds',
  boards: [
    [
      {
        img: kbd67gray,
        name: 'KBD67v2 MkII',
        description: 'Soldered Gray',
        switches: 'Gateron Yellows',
        keycaps: 'NovelKeys_ BoW',
      },
      {
        img: nk65v2,
        name: 'NK65v2',
        description: 'Silver Aluminum',
        switches: 'PrimeKB T1s',
        keycaps: 'NovelKeys_ BoW',
      },
    ]
  ],
}

const Keyboards = () => (
  <div className = "container-fluid">
    {
      [keyboards, other_builds].map(list =>
        <div>
          <div className = "col-md-12">
            <div className = "keyboard-header-center">
              <h1>{list.header}</h1>
            </div>
            <hr/>
          </div>
          {
            list.boards.map(boardPair =>
              <div className="row">
                <div className = "col-md-12">
                  <div className="col-md-offset-2">
                    {
                      boardPair.map(board =>
                      <div className="col-md-5 img-container">
                        <img alt="keyboard" className="keyboard-img" src={board.img}></img>
                        <div className="keeb-info">
                          <p className="keeb-name">
                            {board.name}
                          </p>
                          <p>{board.description}</p>
                          <p>Switches: {board.switches}</p>
                          <p>Keycaps: {board.keycaps}</p>
                          <p className="keeb-current">
                            {board.current ? "Current" : ""}
                          </p>
                        </div>
                      </div>
                      )
                    }
              </div>
            </div>
          </div>
          )
        }
      </div>
      )
    }
  <div className="literallyjustpadding"/>
  </div>
);
export default Keyboards;
