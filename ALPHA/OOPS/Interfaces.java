package OOPS;

public class Interfaces {
    public static void main(String[] args){
        Queen q = new Queen();
        q.moves();
    }
}

interface Herbivore {
    void eatPlants();
}

interface Carnivore {
    void eatMeat();
}

class Bear implements Herbivore, Carnivore {
    public void eatPlants() {
        System.out.println("Bear eats plants");
    }

    public void eatMeat() {
        System.out.println("Bear eats meat");
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
