package OOPS;

public class Interfaces {
    public static void main(String[] args){
        Queen q = new Queen();
        q.moves();
    }
}

interface ChessPlayer {
    void moves();
}

class Queen implements ChessPlayer {
    public void moves() {
        System.out.println("Queen can move in any direction");
    }
}

class Rook implements ChessPlayer {
    public void moves() {
        System.out.println("Rook can move in straight lines");
    }
}

class King implements ChessPlayer {
    public void moves() {
        System.out.println("King can move one square in any direction");
    }
}
