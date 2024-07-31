---
title: Iridium
thumbnail: iridium.png
---

Iridium is a chess bot written in rust. I have wanted to learn rust for a long time but I have never had a project to do it. I was playing chess on a trip and got the idea to make a chess bot. I didn't want to write it in Java or TypeScript so it seemed like the perfect thing to learn rust. I started researching about making chess programs, and I found a very helpful wiki called the [Chess Programming Wiki](https://www.chessprogramming.org) this website had a lot of very helpful information such about common algorithms and ways of storing the board. I knew before I could start working on any kind of algorithem I would have to find a way to represent the board. There where a couple of different ways to do it but I ultimately settled on BitBoards. They are a very simple concept, basically a chess board has 64 squares, conveniently 64 bit data structures are very common, so you can use each bit in a 64 bit number (I used an unsigned 64 bit integer, but you could use a signed 32bit float if you really wanted to) to represent a square on the chess board. However you will need more than 1 BitBoard. I choose to use 14. One for every piece for each side (12) and then 2 more for all the pieces on each side. So I created a BitBoard struct:
<pre><code class="language-rust">#[derive(PartialEq, Eq, PartialOrd, Clone, Copy, Debug, Default, Hash)]
pub struct BitBoard(pub u64);
impl BitBoard {
  pub fn from_pos(pos: u8) -> Self {
    Self(1u64 << pos)
  }
}
</pre></code>
There is also the from_pos function that creates a BitBoard with one position. I also implemented some basic bitwise operations so I didnt have to get the underlying unsigned 64 bit int (`u64`) every time:
```
impl BitAnd for BitBoard {
  type Output = BitBoard;

  fn bitand(self, rhs: Self) -> Self::Output {
    Self(self.0 & rhs.0)
  }
}

impl BitOr for BitBoard {
  type Output = BitBoard;

  fn bitor(self, rhs: Self) -> Self::Output {
    Self(self.0 | rhs.0)
  }
}

impl BitXor for BitBoard {
  type Output = BitBoard;

  fn bitxor(self, rhs: Self) -> Self::Output {
    Self(self.0 ^ rhs.0)
  }
}

impl Not for BitBoard {
  type Output = BitBoard;

  fn not(self) -> Self::Output {
    Self(!self.0)
  }
}

impl Shl for BitBoard {
  type Output = BitBoard;

  fn shl(self, rhs: BitBoard) -> Self::Output {
    Self(self.0 << rhs.0)
  }
}

impl Shr for BitBoard {
  type Output = BitBoard;

  fn shr(self, rhs: Self) -> Self::Output {
    Self(self.0 >> rhs.0)
  }
}
```

I also created the Board struct to hold everything the else about the state of the game, and two enums: Pieces and Sides:
```
#[derive(Debug, Clone, Copy, PartialEq)]
pub struct Board {
  // pub bb_sides: [BitBoard; 2],
  pub bb_pieces: [[BitBoard; 6]; 2],

  pub bb_sides: [BitBoard; 2],

  pub turn: Sides,

  pub white_can_oo: bool,

  pub black_can_oo: bool,

  pub white_can_ooo: bool,

  pub black_can_ooo: bool,

  pub en_passant_square: Option<u8>,

  pub half_moves: u64,

  pub full_moves: usize,

  pub score: f32,
}
```
```
#[derive(Debug, Clone, Copy, PartialEq, Eq, Default)]
#[repr(usize)]
pub enum Pieces {
  #[default]
  PAWN = 0,
  BISHOP = 1,
  KNIGHT = 2,
  ROOK = 3,
  QUEEN = 4,
  KING = 5,
}

#[derive(Debug, Clone, Copy, Hash, PartialEq, Eq)]
#[repr(usize)]
pub enum Sides {
  WHITE = 0,
  BLACK = 1,
}
```

<video controls>
  <source src="/projects/images/iridium/pvs_1st_test.mp4" type="video/mp4">
</video>

*First test of the PVS algorithm*