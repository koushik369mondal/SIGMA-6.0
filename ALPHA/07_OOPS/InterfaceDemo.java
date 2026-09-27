public class InterfaceDemo {
    // Multiple Interfaces
    interface Herbivore {
        void eatPlants();
    }

    interface Carnivore {
        void eatMeat();
    }

    interface ChessPlayer {
        void moves();
    }

    // Implementing Multiple Interfaces
    static class Bear implements Herbivore, Carnivore {
        @Override
        public void eatPlants() {
            System.out.println("Bear eats plants");
        }

        @Override
        public void eatMeat() {
            System.out.println("Bear eats meat");
        }
    }

    // Chess implementations
    static class Queen implements ChessPlayer {
        @Override
        public void moves() {
            System.out.println("Queen can move in any direction (diagonal, horizontal, vertical)");
        }
    }

    static class Rook implements ChessPlayer {
        @Override
        public void moves() {
            System.out.println("Rook can move in straight lines (horizontal, vertical)");
        }
    }

    static class King implements ChessPlayer {
        @Override
        public void moves() {
            System.out.println("King can move one square in any direction");
        }
    }

    public static void main(String[] args) {
        Bear bear = new Bear();
        bear.eatPlants();
        bear.eatMeat();

        System.out.println();

        Queen queen = new Queen();
        queen.moves();

        Rook rook = new Rook();
        rook.moves();

        King king = new King();
        king.moves();
    }
}
