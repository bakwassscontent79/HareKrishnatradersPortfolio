export interface Product {
  id: string
  name: string
  category: string
  description: string
  usage: string
  image: string
  image2?: string // Second image (optional for backward compatibility)
}

export const products: Product[] = [
  {
    id: "power-twister-20kg",
    name: "Power Twister 20kg",
    category: "Fitness Equipment",
    description:
      "High-quality power twister for upper body strength training. Durable construction with comfortable grip handles.",
    usage:
      "Hold the power twister with both hands and bend it using chest and arm muscles. Perform 3 sets of 10-15 repetitions for best results.",
    image: "https://m.media-amazon.com/images/I/41RU6XjIi9L._SY300_SX300_QL70_FMwebp_.jpg",
    image2: "https://m.media-amazon.com/images/S/aplus-media-library-service-media/2db8ec35-5b1d-49b7-9c9a-4f001648268a.__CR0,0,970,600_PT0_SX970_V1___.jpg",
  },
  {
    id: "aquarium-thermometer",
    name: "Temperature Meter with On/Off Button",
    category: "Measurement Tools",
    description:
      "Digital aquarium thermometer with sensor wire for accurate temperature monitoring. Features on/off button for battery conservation.",
    usage:
      "Place the sensor probe in water. Press the on/off button to activate. Display shows accurate temperature readings in real-time.",
    image: "https://m.media-amazon.com/images/I/71XPTh7WBvL._SL1500_.jpg",
    image2: "https://m.media-amazon.com/images/I/411dRjwqm5L._SL1500_.jpg"
  },
  {
    id: "infrared-thermometer",
    name: "Non-Contact Digital Laser Infrared Thermometer",
    category: "Medical Equipment",
    description:
      "Professional infrared temperature gun with laser grip. Measures temperatures from -58°F to 752°F (-50°C to 400°C). Perfect for cooking, BBQ, and industrial use.",
    usage:
      "Point the laser at the target surface from 6-12 inches away. Pull the trigger to get instant temperature reading on the LCD display.",
    image: "https://m.media-amazon.com/images/I/61L-7dKjIrL._SL1500_.jpg",
    image2: "https://m.media-amazon.com/images/I/71NG4fC5AbL._SL1500_.jpg"
  },
  {
    id: "htc-2-thermometer",
    name: "HTC-2 Digital Thermometer Hygrometer",
    category: "Measurement Tools",
    description:
      "Room thermometer with humidity meter and LCD digital clock. Wall mounting capability with accurate temperature and humidity indicators.",
    usage:
      "Mount on wall or place on desk. Device automatically displays room temperature, humidity percentage, and time. No calibration needed.",
    image: "https://m.media-amazon.com/images/I/51H83c1KeKL._SL1000_.jpg",
    image2: "https://m.media-amazon.com/images/I/71mnfiiV8wL._SL1500_.jpg"
  },
  {
    id: "adjustable-hand-grip",
    name: "Adjustable Hand Grip Strengthener with Counter (5-60kg)",
    category: "Fitness Equipment",
    description:
      "Professional hand gripper with digital counter for men and women. Adjustable resistance from 5kg to 60kg for progressive training.",
    usage:
      "Set desired resistance level. Squeeze the gripper repeatedly. Counter tracks your repetitions automatically. Ideal for forearm and finger strengthening.",
    image: "https://m.media-amazon.com/images/I/51+tl+KDdvL.jpg",
    image2: "https://m.media-amazon.com/images/I/513tlr1uBdL.jpg"
  },
  {
    id: "htc-1-thermometer",
    name: "Digital Indoor Temperature and Humidity Meter (HTC-1)",
    category: "Measurement Tools",
    description:
      "High precision hygrometer thermometer with alarm clock and big LCD display. Suitable for wall mounting or desktop use in home and office.",
    usage:
      "Place in desired location. Device displays temperature, humidity, and time simultaneously. Set alarm using the buttons on the back.",
    image: "https://m.media-amazon.com/images/I/41TC5tZejTL.jpg",
    image2: "https://m.media-amazon.com/images/I/41TC5tZejTL.jpg"
  },
  {
    id: "tds-meter",
    name: "Digital Imported TDS Meter",
    category: "Measurement Tools",
    description:
      "Water quality tester for measuring PPM (parts per million). Essential for testing home water, RO systems, aquariums, and hydroponics.",
    usage:
      "Remove protective cap. Turn on the device. Immerse the electrode in water and stir gently. Wait for reading to stabilize on display.",
    image: "https://m.media-amazon.com/images/I/51oCxicn41L._SL1500_.jpg",
    image2: "https://m.media-amazon.com/images/I/61hGw-epsJL._SL1500_.jpg"
  },
  {
    id: "oxygen-flow-meter",
    name: "Oxygen Flow Meter with Regulator and Humidifier Bottle",
    category: "Medical Equipment",
    description:
      "Professional oxygen valve with rotameter and humidifier bottle for precise oxygen flow adjustment in medical settings.",
    usage:
      "Connect to oxygen cylinder. Fill humidifier bottle with distilled water. Adjust flow rate using the control knob while monitoring the rotameter.",
    image: "https://m.media-amazon.com/images/I/61hGw-epsJL._SL1500_.jpg",
    image2: "https://m.media-amazon.com/images/I/51PptLZ7pRL._SL1024_.jpg"
  },
  {
    id: "folding-walking-stick",
    name: "Aluminium Foldable Walking Stick",
    category: "Mobility Aids",
    description:
      "Lightweight folding walking stick for men, women, and elderly. Made from durable aluminium with adjustable height. Includes trekking cane support.",
    usage:
      "Adjust height to comfortable level. Unfold all sections and lock in place. Use for walking support or trekking. Folds compact for easy storage.",
    image: "https://m.media-amazon.com/images/I/51B+5OsaWoL._SL1080_.jpg",
    image2: "https://m.media-amazon.com/images/I/61zmu68sMoL._SL1080_.jpg"
  },
  {
    id: "digital-anemometer",
    name: "Digital Anemometer Wind-Speed Gauge Meter",
    category: "Measurement Tools",
    description:
      "Handheld LCD anemometer with backlight for measuring wind speed and air flow. Includes thermometer function for temperature measurement.",
    usage:
      "Turn on device. Hold in wind or airflow. LCD displays wind speed in multiple units. Backlight button for use in low light conditions.",
    image: "/https://m.media-amazon.com/images/I/61zmu68sMoL._SL1080_.jpg",
    image2: "https://m.media-amazon.com/images/I/81Z9k-+-ZoL._SL1500_.jpg"
  },
  {
    id: "manual-room-thermometer",
    name: "Manual Room Thermometer",
    category: "Measurement Tools",
    description:
      "Classic wall-mounting room temperature thermometer in white. No batteries required, uses traditional mercury-free design.",
    usage:
      "Mount on wall away from direct sunlight and heat sources. Read temperature by observing the indicator level on the scale.",
    image: "https://m.media-amazon.com/images/I/512PyDdVlbL._SL1500_.jpg",
    image2: "https://m.media-amazon.com/images/I/61W0x42-MAL._SL1500_.jpg"
  },
  {
    id: "steam-thermometer",
    name: "Multi Steam Thermometer with External Sensor Probe",
    category: "Measurement Tools",
    description:
      "Professional thermometer with external sensor probe for accurate and fast temperature response. Ideal for steam and liquid measurements.",
    usage:
      "Insert probe into steam or liquid. Wait 3-5 seconds for accurate reading. Display shows temperature in Celsius or Fahrenheit.",
    image: "https://m.media-amazon.com/images/I/41+mo2Al9kL.jpg",
    image2: "https://m.media-amazon.com/images/I/41+mo2Al9kL.jpg"
  },
  {
    id: "cooking-thermometer",
    name: "Digital LCD Cooking Food Meat Probe Thermometer",
    category: "Kitchen Tools",
    description:
      "Instant read thermometer with 5.9 inch steel probe. Perfect for industrial, grill, candy, milk, oil, and liquid lab chemical temperature testing.",
    usage:
      "Insert probe into food or liquid. Wait for instant reading on LCD display. Clean probe after each use. Suitable for temperatures up to 300°C.",
    image: "https://m.media-amazon.com/images/I/312wPDsH23L.jpg",
    image2: "https://m.media-amazon.com/images/I/41zmnGqInrL.jpg"
  },
  {
    id: "refractometer",
    name: "Refractometer with ATC (0-100% Brix)",
    category: "Measurement Tools",
    description:
      "Handheld Brix meter with automatic temperature compensation. Portable sugar content tester with accessories for accurate measurements.",
    usage:
      "Place 2-3 drops of sample on prism. Close daylight plate. Look through eyepiece and read Brix value on the scale. Wipe clean after use.",
    image: "https://m.media-amazon.com/images/I/41zmnGqInrL.jpg",
    image2: "https://m.media-amazon.com/images/I/41zmnGqInrL.jpg"
  },
  {
    id: "soil-ph-meter",
    name: "Soil pH Meter 3-in-1 Soil Test Kit",
    category: "Gardening Tools",
    description:
      "Multi-function soil tester for moisture, light, and pH levels. High accuracy gardening tool for lawn, farm, plants, and herbs. Suitable for indoor and outdoor use.",
    usage:
      "Insert probes 4 inches into soil. Switch to desired function (moisture/light/pH). Wait 10 minutes for accurate reading. No batteries required.",
    image: "https://m.media-amazon.com/images/I/41zmnGqInrL.jpg",
    image2: "https://m.media-amazon.com/images/I/812QSwk05SL._SL1500_.jpg"
  },
  {
    id: "wrist-strengthener",
    name: "Wrist Forearm Strengthener",
    category: "Fitness Equipment",
    description:
      "Adjustable resistance grip trainer for hands, wrists, and arm workouts. Improves grip strength and forearm muscle development.",
    usage:
      "Adjust resistance level. Grip the device and perform wrist curls or rotations. Use for 10-15 minutes daily for best results.",
    image: "/products/wrist-strengthener.jpg",
    image2: "/products/wrist-strengthener-2.jpg",
  },
  {
    id: "pen-led-torch",
    name: "Aluminium Pocket Pen LED Torch Light",
    category: "Medical Equipment",
    description:
      "Professional penlight for doctors, nurses, and medical students. Moon white light with super bright LED. Includes free battery.",
    usage:
      "Click button to turn on/off. Use for pupil examination, throat inspection, or general illumination. Compact design fits in pocket.",
    image: "/products/pen-led-torch.jpg",
    image2: "/products/pen-led-torch-2.jpg",
  },
  {
    id: "folding-kitchen-thermometer",
    name: "Folding Kitchen Thermometer Quick Read",
    category: "Kitchen Tools",
    description:
      "Digital infrared thermometer for food, meat, barbecue, BBQ, and cake. Temperature range: -50°C to 550°C. Fast response time of 0.5 seconds.",
    usage:
      "Unfold probe. Insert into food or point at surface. Wait 0.5 seconds for reading. Fold back when done for safe storage.",
    image: "/products/folding-kitchen-thermometer.jpg",
    image2: "/products/folding-kitchen-thermometer-2.jpg",
  },
  {
    id: "tpm-14-thermometer",
    name: "Mini LCD TPM-14 Digital Thermometer",
    category: "Measurement Tools",
    description:
      "Compact wired sensor thermometer for room temperature and fridges. Indoor/outdoor portable pocket LCD electronic temperature meter.",
    usage:
      "Place sensor in desired location. LCD displays current temperature. Suitable for refrigerators, freezers, rooms, and outdoor use.",
    image: "/products/tpm-14-thermometer.jpg",
    image2: "/products/tpm-14-thermometer-2.jpg",
  },
  {
    id: "plaster-cutter",
    name: "Premium Electric Plaster Cutter Machine",
    category: "Medical Equipment",
    description:
      "Professional adjustable blade plaster cutter for accurate cuts. Wide range of orthopedic applications. Includes 2 different-sized circular stainless steel blades (45mm and 60mm).",
    usage:
      "Select appropriate blade size. Turn on device. Carefully guide along plaster cast line. Handy design ensures safe and precise cutting.",
    image: "/products/plaster-cutter.jpg",
    image2: "/products/plaster-cutter-2.jpg",
  },
  {
    id: "alcohol-tester",
    name: "Professional Alcohol Tester Digital Breathalyzer",
    category: "Diagnostic Tools",
    description:
      "High-precision breath analyzer with LCD display and audible alert. Digital alcohol detector for accurate BAC measurement.",
    usage:
      "Turn on device. Wait for warm-up. Blow steadily into mouthpiece for 5 seconds. LCD displays blood alcohol content level with audible alert if over limit.",
    image: "/products/alcohol-tester.jpg",
    image2: "/products/alcohol-tester-2.jpg",
  },
  {
    id: "fetal-doppler",
    name: "Portable Fetal Doppler Heart Rate Monitor",
    category: "Medical Equipment",
    description:
      "Home baby fetal heart doppler for pregnancy monitoring. Measures 50-230M Hz with LCD display. Pocket-sized portable pregnancy companion.",
    usage:
      "Apply gel to probe. Place on abdomen. Move slowly to locate heartbeat. LCD displays heart rate. Use after 12 weeks of pregnancy.",
    image: "/products/fetal-doppler.jpg",
    image2: "/products/fetal-doppler-2.jpg",
  },
  {
    id: "air-mattress",
    name: "Air Mattress with Bubble Surface",
    category: "Medical Equipment",
    description:
      "Pressure relief air mattress with soft, moisture-wicking fabric. Machine washable for easy maintenance. Ideal for bedridden patients.",
    usage:
      "Connect to air pump. Inflate to desired firmness. Place on bed. Adjust pressure for comfort. Wash cover regularly for hygiene.",
    image: "/products/air-mattress.jpg",
    image2: "/products/air-mattress-2.jpg",
  },
  {
    id: "ophthalmoscope",
    name: "Medical Ophthalmoscope (OP-10)",
    category: "Medical Equipment",
    description:
      "Portable handheld direct ophthalmoscope for eye examination. Features 5 apertures and includes storage box. Professional medical device.",
    usage:
      "Select appropriate aperture. Hold close to your eye. Shine light into patient's eye. Examine retina and optic nerve. Store in provided box.",
    image: "/products/ophthalmoscope.jpg",
    image2: "/products/ophthalmoscope-2.jpg",
  },
  {
    id: "sound-decibel-meter",
    name: "Sound Decibel Meter Digital Mini",
    category: "Measurement Tools",
    description:
      "Audio noise measurement device measuring 30-130dBA. Features MAX/MIN hold and auto backlight display for easy reading.",
    usage:
      "Turn on device. Point microphone toward sound source. LCD displays decibel level. Use MAX/MIN hold to capture peak values.",
    image: "/products/sound-decibel-meter.jpg",
    image2: "/products/sound-decibel-meter-2.jpg",
  },
  {
    id: "power-twister-40kg",
    name: "Power Twister Bar (40KG)",
    category: "Fitness Equipment",
    description:
      "Heavy-duty upper body exercise equipment for chest, shoulder, forearm, bicep, and arm strengthening. Size: 53 x 3 x 3 cm. Black color.",
    usage:
      "Hold bar with both hands shoulder-width apart. Bend using chest and arm muscles. Perform controlled repetitions. Ideal for advanced users.",
    image: "/products/power-twister-40kg.jpg",
    image2: "/products/power-twister-40kg-2.jpg",
  },
  {
    id: "professional-hand-gripper",
    name: "Professional Hand Gripper (10-60Kg)",
    category: "Fitness Equipment",
    description:
      "Multi-color hand exerciser and forearm exerciser for gym workouts. Adjustable resistance for progressive strength training at home.",
    usage:
      "Adjust resistance dial to desired level. Squeeze gripper repeatedly. Perform 3-4 sets of 15-20 reps per hand. Increase resistance as strength improves.",
    image: "/products/professional-hand-gripper.jpg",
    image2: "/products/professional-hand-gripper-2.jpg",
  },
  {
    id: "luggage-scale",
    name: "Digital LED Luggage Weighing Scale (50kg/110lb)",
    category: "Measurement Tools",
    description:
      "Rechargeable hook-type weighing scale with tare function. Lightweight and durable for travel and multi-purpose use.",
    usage:
      "Charge before use. Hook luggage handle. Lift steadily. LED displays weight. Use tare function to subtract bag weight.",
    image: "/products/luggage-scale.jpg",
    image2: "/products/luggage-scale-2.jpg",
  },
  {
    id: "tummy-trimmer",
    name: "Tummy Trimmer Abs Workout Equipment",
    category: "Fitness Equipment",
    description:
      "Home exercise equipment for weight loss. Multi-purpose stomach, leg, and belly fat burner for men and women. Pull reducer design.",
    usage:
      "Sit with feet in pedals. Hold handles. Pull back using core muscles. Perform 3 sets of 15-20 reps. Use daily for best results.",
    image: "/products/tummy-trimmer.jpg",
    image2: "/products/tummy-trimmer-2.jpg",
  },
  {
    id: "hand-grip-counter-100kg",
    name: "Adjustable Hand Grip Strengthener with Counter (5-100 Kg)",
    category: "Fitness Equipment",
    description:
      "Heavy-duty power gripper for men and women. Ideal for forearm, finger, and wrist exercise. Suitable for gym workouts, home use, and rehabilitation.",
    usage:
      "Set resistance from 5-100kg. Squeeze gripper. Digital counter tracks reps. Perfect for building crushing grip strength.",
    image: "/products/hand-grip-counter-100kg.jpg",
    image2: "/products/hand-grip-counter-100kg-2.jpg",
  },
  {
    id: "finger-exerciser",
    name: "Finger and Hand Grip Exerciser",
    category: "Fitness Equipment",
    description:
      "Physiotherapy quality plastic fitness gripper. Assorted colors. Pack of 1. Ideal for finger strength and rehabilitation exercises.",
    usage:
      "Place fingers in loops. Squeeze repeatedly. Use for finger rehabilitation or strength training. Suitable for all ages.",
    image: "/products/finger-exerciser.jpg",
    image2: "/products/finger-exerciser-2.jpg",
  },
  {
    id: "wood-moisture-meter",
    name: "Wood Moisture Meter Two Pins",
    category: "Measurement Tools",
    description:
      "Wood moisture detector for building materials, firewood, walls, paper, and floors. Two-pin design for accurate humidity testing.",
    usage:
      "Insert pins into wood surface. Press measure button. LCD displays moisture percentage. Ideal for woodworking and construction.",
    image: "/products/wood-moisture-meter.jpg",
    image2: "/products/wood-moisture-meter-2.jpg",
  },
  {
    id: "grain-moisture-meter-gm640",
    name: "Grain Moisture Meter with Measuring Probe (GM640)",
    category: "Measurement Tools",
    description:
      "Digital grain moisture meter with measuring probe for accurate moisture content detection in various grains and seeds.",
    usage:
      "Insert probe into grain sample. Press measure button. Digital display shows moisture percentage. Essential for grain storage.",
    image: "/products/grain-moisture-meter-gm640.jpg",
    image2: "/products/grain-moisture-meter-gm640-2.jpg",
  },
  {
    id: "grain-moisture-meter-ar991",
    name: "Smart Sensor AR991 Food Grain Moisture Meter",
    category: "Measurement Tools",
    description:
      "Advanced moisture meter for 14 types of grains. Features LCD display and voice alarm for convenience and accuracy.",
    usage:
      "Select grain type. Insert probe into sample. Device displays moisture level and sounds alarm if outside optimal range.",
    image: "/products/grain-moisture-meter-ar991.jpg",
    image2: "/products/grain-moisture-meter-ar991-2.jpg",
  },
  {
    id: "heating-belt-back",
    name: "Heating Belt for Back Pain",
    category: "Therapy Equipment",
    description:
      "Electric orthopedic heating pad for quick pain relief. Suitable for leg, back, chest, and arm pain. Adjustable temperature settings.",
    usage:
      "Wrap around affected area. Plug in and select temperature. Use for 15-20 minutes. Provides soothing heat therapy for pain relief.",
    image: "/products/heating-belt-back.jpg",
    image2: "/products/heating-belt-back-2.jpg",
  },
  {
    id: "electric-heating-pad",
    name: "Electric Heating Pad Orthopedic",
    category: "Therapy Equipment",
    description:
      "Fast heating technology heating pad for joints, muscle, shoulder, abdominal, neck, and back pain relief. Professional heat therapy device.",
    usage:
      "Place on painful area. Turn on and select heat level. Use for 15-30 minutes per session. Do not use while sleeping.",
    image: "/products/electric-heating-pad.jpg",
    image2: "/products/electric-heating-pad-2.jpg",
  },
  {
    id: "heating-pad-grey",
    name: "Heating Pad - Orthopaedic Electric Heating Belt",
    category: "Therapy Equipment",
    description:
      "Lower back heat therapy waist wrap with 3 temperature settings. Provides pain relief for abdominal, stomach, and lumbar muscle strain. Grey color.",
    usage:
      "Wrap around waist or affected area. Select from 3 temperature levels. Use for 20 minutes per session. Machine washable cover.",
    image: "/products/heating-pad-grey.jpg",
    image2: "/products/heating-pad-grey-2.jpg",
  },
  {
    id: "steamer-3in1",
    name: "3 in 1 Steamer for Cold and Cough",
    category: "Medical Equipment",
    description:
      "Multi-purpose vaporizer for face steam, steam inhaler, and vaporizer machine. Features UV steam sterilization. Use only RO/filtered water.",
    usage:
      "Fill with filtered water. Turn on device. Use face mask for inhalation or direct steam for facial. UV sterilization ensures hygiene.",
    image: "/products/steamer-3in1.jpg",
    image2: "/products/steamer-3in1-2.jpg",
  },
  {
    id: "grain-moisture-meter-md7822",
    name: "Grain Moisture Meter with Measuring Probe (MD-7822)",
    category: "Measurement Tools",
    description:
      "Pin-type grain moisture detector for wheat, paddy, rice, corn, feed, and barley. LCD display for accurate measurement.",
    usage:
      "Select grain type using buttons. Insert pins into grain. LCD shows moisture percentage. Essential for farmers and grain traders.",
    image: "/products/grain-moisture-meter-md7822.jpg",
    image2: "/products/grain-moisture-meter-md7822-2.jpg",
  },
  {
    id: "folding-walking-stick-silver",
    name: "Silver Adjustable Folding Walking Stick",
    category: "Mobility Aids",
    description:
      "Imported adjustable folding walking stick for unisex use. Suitable for home and outdoor activities. Durable silver finish.",
    usage:
      "Adjust to comfortable height. Unfold and lock sections. Use for walking support. Folds for easy transport and storage.",
    image: "/products/folding-walking-stick-silver.jpg",
    image2: "/products/folding-walking-stick-silver-2.jpg",
  },
  {
    id: "kitchen-scale",
    name: "Digital Kitchen Weighing Scale (SF-400A)",
    category: "Measurement Tools",
    description:
      "Electronic weight machine with adapter and LCD display. Capacity: 1g x 10kg. Perfect for kitchen, vegetable shop, and home use. White color.",
    usage:
      "Place on flat surface. Turn on. Place items on platform. LCD displays weight. Tare function for container weight.",
    image: "/products/kitchen-scale.jpg",
    image2: "/products/kitchen-scale-2.jpg",
  },
  {
    id: "blind-cane",
    name: "Folding Blind Cane (124 cm)",
    category: "Mobility Aids",
    description:
      "Folding cane for blind people with reflective red reflector for safety while walking. Designed for vision impaired and blind individuals. Height: 124 cm.",
    usage:
      "Unfold all sections and lock. Hold at comfortable angle. Sweep side to side while walking. Reflector ensures visibility to others.",
    image: "/products/blind-cane.jpg",
    image2: "/products/blind-cane-2.jpg",
  },
  {
    id: "jal-neti-pot",
    name: "Plastic Unbreakable Jal Neti Pot",
    category: "Health Equipment",
    description:
      "Nasal wash pot for sinus cleansing. Unbreakable plastic construction. Available in white and blue colors.",
    usage:
      "Fill with lukewarm saline water. Tilt head. Insert spout in nostril. Water flows through nasal passages. Helps clear sinuses naturally.",
    image: "/products/jal-neti-pot.jpg",
    image2: "/products/jal-neti-pot-2.jpg",
  },
  {
    id: "height-measurement-ruler",
    name: "Human Body Stature Meter Wall Mount (2M/200CM)",
    category: "Measurement Tools",
    description:
      "Height measuring ruler for home use. Suitable for adults and children. Wall-mounted roll ruler in black color. Measures up to 200cm.",
    usage:
      "Mount on wall at floor level. Stand straight against wall. Pull down measuring arm to top of head. Read height measurement.",
    image: "/products/height-measurement-ruler.jpg",
    image2: "/products/height-measurement-ruler-2.jpg",
  },
  {
    id: "stethoscope-black",
    name: "Black Edition Dual Head Stainless Steel Stethoscope",
    category: "Medical Equipment",
    description:
      "Professional stethoscope for doctors, nurses, and medical students. Lightweight chest piece with flexible latex-free tube. Black edition.",
    usage:
      "Place earpieces in ears. Use diaphragm for high-frequency sounds or bell for low-frequency. Listen to heart, lungs, and blood pressure.",
    image: "/products/stethoscope-black.jpg",
    image2: "/products/stethoscope-black-2.jpg",
  },
  {
    id: "stethoscope-brown",
    name: "Brown Edition Dual Head Stainless Steel Stethoscope",
    category: "Medical Equipment",
    description:
      "Professional stethoscope for doctors, nurses, and medical students. Lightweight chest piece with flexible latex-free tube. Brown edition.",
    usage:
      "Insert earpieces comfortably. Select diaphragm or bell side. Place on patient's body. Listen carefully to internal sounds.",
    image: "/products/stethoscope-brown.jpg",
    image2: "/products/stethoscope-brown-2.jpg",
  },
]

export const categories = [
  "All Products",
  "Medical Equipment",
  "Fitness Equipment",
  "Measurement Tools",
  "Kitchen Tools",
  "Therapy Equipment",
  "Mobility Aids",
  "Diagnostic Tools",
  "Gardening Tools",
  "Health Equipment",
]
