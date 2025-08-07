# Coil-Tracking-System

#  Coil Tracking System – Visual Simulation

This project is a **front-end simulation** of an industrial **Coil Tracking System**, commonly used in metal processing units like steel plants, rolling mills, and coil handling systems.

It visually demonstrates the flow and state of coils as they move through different checkpoints or machines along a production line.

---

##  Features

-  **Three coil positions** representing various stations or checkpoints
-  **Directional animation** simulating coil movement from one station to another
- 🟢🟠 **Status indication** using colors:
  - 🟢 Green: Active (in motion)
  - 🟠 Orange: Idle (stopped)
- 🛞 **Dynamic tyre grip markers** around coils for realistic rotational feel
-  **Static center structure** to simulate rollers or coil guide mechanisms
-  Lightweight, responsive, and easy to modify

---

##  Use Case

This simulation is ideal for:

- Educational demonstrations of coil processing lines  
- UI mockups for industrial HMI/SCADA interfaces  
- Concept testing for coil movement and direction logic  
- Visualizing real-time coil status and transitions in production monitoring apps

---

##  Built With

- **HTML5** – For structure and layout  
- **CSS3** – For styling, animations, and visual presentation  
- **Vanilla JavaScript** – For interactivity and simulation logic

---

##  Example Usage

To simulate coil movement between stations:

```javascript
triggerRotation(3, 1); // Moves coil from station 3 to 1 (anticlockwise)
triggerRotation(1, 2); // Moves coil from station 1 to 2 (clockwise)
