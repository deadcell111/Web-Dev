from models import Animal, Dog, Cat

def main():
    print("=" * 60)
    print("OBJECT-ORIENTED PROGRAMMING IN PYTHON DEMONSTRATION")
    print("=" * 60)
    print()
    
    # Create instances of each class
    print("1. CREATING OBJECTS FROM EACH CLASS")
    print("-" * 60)
    
    dog1 = Dog("Buddy", 3, "Golden Retriever", is_trained=True)
    dog2 = Dog("Max", 1, "Labrador", is_trained=False)
    cat1 = Cat("Whiskers", 5, "Orange", indoor=True)
    cat2 = Cat("Shadow", 2, "Black", indoor=False)
    
    print(f"Created: {dog1}")
    print(f"Created: {dog2}")
    print(f"Created: {cat1}")
    print(f"Created: {cat2}")
    print()
    
    # Store objects in a list and iterate
    print("2. STORING OBJECTS IN A LIST AND ITERATING")
    print("-" * 60)
    
    animals = [dog1, dog2, cat1, cat2]
    
    print("All animals in the list:")
    for i, animal in enumerate(animals, 1):
        print(f"  {i}. {animal}")
    print()
    
    # Call methods on objects and print results
    print("3. CALLING METHODS ON OBJECTS")
    print("-" * 60)
    
    for animal in animals:
        print(f"\n{animal.name}:")
        print(f"  Info: {animal.get_info()}")
        
        # Call species-specific methods
        if isinstance(animal, Dog):
            print(f"  Action: {animal.fetch('ball')}")
        elif isinstance(animal, Cat):
            print(f"  Action: {animal.scratch('couch')}")
    print()
    
    # Demonstrate polymorphism with overridden methods
    print("4. DEMONSTRATING POLYMORPHISM")
    print("-" * 60)
    print("\nCalling speak() on different animal types:")
    print("(Same method name, different implementations)")
    print()
    
    for animal in animals:
        print(f"  {animal.name} ({animal.species}): {animal.speak()}")
    print()
    
    # Demonstrate additional features
    print("5. CALLING UNIQUE METHODS")
    print("-" * 60)
    
    print(f"\nDog Training:")
    print(f"  {dog2.train()}")
    print(f"  {dog2.fetch('stick')}")
    print()
    
    print("Cat Behavior:")
    print(f"  {cat1.nap()}")
    print()
    
    # Demonstrate age increment
    print("6. USING BASE CLASS INSTANCE METHODS")
    print("-" * 60)
    print(f"\nAging animals:")
    print(f"  {dog1.age_animal()}")
    print(f"  {cat2.age_animal()}")
    print()
    
    # Summary
    print("7. SUMMARY OF OOP CONCEPTS DEMONSTRATED")
    print("-" * 60)
    print("✓ Inheritance: Dog and Cat inherit from Animal base class")
    print("✓ Encapsulation: Attributes and methods organized in classes")
    print("✓ Polymorphism: speak() method behaves differently for each class")
    print("✓ Method Overriding: Dog and Cat override parent methods")
    print("✓ Instance Methods: Each class has unique behaviors")
    print("✓ Constructors: __init__ initializes objects with attributes")
    print("✓ String Representation: __str__ provides readable output")
    print("✓ Modules: Code organized in separate files (models.py, main.py)")
    print()
    print("=" * 60)


if __name__ == "__main__":
    main()