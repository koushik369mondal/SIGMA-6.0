package OOPS;

public class Interfaces {
    public static void main(String[] args) {

        // Multiple interfaces
        Bear bear = new Bear();
        bear.eatPlants();
        bear.eatMeat();

        System.out.println();

        // Chess players
        Queen queen = new Queen();
        queen.moves();

        Rook rook = new Rook();
        rook.moves();

        King king = new King();
        king.moves();
    }
}

// Interfaces
interface Herbivore {
    void eatPlants();
}

interface Carnivore {
    void eatMeat();
}

interface ChessPlayer {
    void moves();
}

// Classes
class Bear implements Herbivore, Carnivore {

    @Override
    public void eatPlants() {
        System.out.println("Bear eats plants");
    }

    @Override
    public void eatMeat() {
        System.out.println("Bear eats meat");
    }
}

class Queen implements ChessPlayer {

    @Override
    public void moves() {
        System.out.println("Queen can move in any direction");
    }
}

class Rook implements ChessPlayer {

    @Override
    public void moves() {
        System.out.println("Rook can move in straight lines");
    }
}

class King implements ChessPlayer {

    @Override
    public void moves() {
        System.out.println("King can move one square in any direction");
    }
}