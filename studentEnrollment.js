# Initialize arrays for each subject
DSA = []
PL = []
Networks = []

# Main program loop
while True:
  # Display subject options
  print("\nSubjects:")
  print("A) DSA")
  print("B) PL")
  print("C) Networks")

  # Get user input for subject choice
  subject_choice = input("Select a subject: ")

  # Handle subject choice
  if subject_choice == "A":
    subject = DSA
  elif subject_choice == "B":
    subject = PL
  elif subject_choice == "C":
    subject = Networks
  else:
    print("Invalid subject choice.")
    continue

  # Display operation options
  print("\nOperations:")
  print("A) Enroll")
  print("B) Unenroll")
  print("C) Select Another Subject")
  print("D) Exit")

  # Get user input for operation choice
  operation_choice = input("Select an operation: ")

  # Handle operation choice
  if operation_choice == "A":
    # Enroll student
    student_name = input("Enter the name of the student to enroll: ")
    subject.append(student_name)
    print(f"{student_name} enrolled in {subject_choice}.")
  elif operation_choice == "B":
    # Unenroll student
    if len(subject) == 0:
      print("No students enrolled in this subject.")
    else:
      print("\nCurrently enrolled students:")
      for i, student in enumerate(subject):
        print(f"{i+1}. {student}")

      student_index = int(input("Enter the number of the student to unenroll: ")) - 1
      if 0 <= student_index < len(subject):
        student_name = subject.pop(student_index)
        print(f"{student_name} unenrolled from {subject_choice}.")
      else:
        print("Invalid student number.")
  elif operation_choice == "C":
    # Select another subject
    continue
  elif operation_choice == "D":
    # Exit program
    print("\nEnlisted students per subject:")
    print(f"DSA: {DSA}")
    print(f"PL: {PL}")
    print(f"Networks: {Networks}")
    break
  else:
    print("Invalid operation choice.")
