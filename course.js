const courses = {
  programming: { title: "💻 Programming", description: "Learn coding logic, web foundations and JavaScript step by step.", lessons: [
    {
      title: "Variables", content: "Variables store values a program can use.", details: "Variables store values a program can use. Study the example, then try the practice task in your own words. If a concept feels difficult, revisit the explanation and test yourself again.", examples: "const learner = 'Sara';", practice: "Create variables for a name and age.",
      quiz: [
        { question: "What is a variable used for?", options: ["Store a value", "Clean a screen", "Connect a monitor"], answer: 0 },
        { question: "Which is the best way to learn this topic?", options: ["Read, practise and check your understanding", "Skip the explanation", "Memorize without understanding"], answer: 0 },
        { question: "What should you do if your first attempt is incorrect?", options: ["Review the lesson and try again", "Give up immediately", "Ignore the feedback"], answer: 0 },
      ]
    },
    {
      title: "Data Types", content: "Data types describe the kind of value. Strings hold text, numbers hold numeric values, and booleans are true or false.", details: "Data types describe the kind of value. Strings hold text, numbers hold numeric values, and booleans are true or false. Study the example, then try the practice task in your own words. If a concept feels difficult, revisit the explanation and test yourself again.", examples: "const name = 'Ali'; const age = 18; const passed = true;", practice: "Write one string, one number and one boolean.",
      quiz: [
        { question: "Which type stores text?", options: ["String", "Boolean", "Number"], answer: 0 },
        { question: "Which is the best way to learn this topic?", options: ["Read, practise and check your understanding", "Skip the explanation", "Memorize without understanding"], answer: 0 },
        { question: "What should you do if your first attempt is incorrect?", options: ["Review the lesson and try again", "Give up immediately", "Ignore the feedback"], answer: 0 },
      ]
    },
    {
      title: "Conditions", content: "if and else statements let a program choose which instructions to run.", details: "if and else statements let a program choose which instructions to run. Study the example, then try the practice task in your own words. If a concept feels difficult, revisit the explanation and test yourself again.", examples: "if (score >= 50) { console.log('Pass'); } else { console.log('Try again'); }", practice: "Write a condition that checks whether a number is positive.",
      quiz: [
        { question: "Which keyword starts a condition?", options: ["if", "for", "const"], answer: 0 },
        { question: "Which is the best way to learn this topic?", options: ["Read, practise and check your understanding", "Skip the explanation", "Memorize without understanding"], answer: 0 },
        { question: "What should you do if your first attempt is incorrect?", options: ["Review the lesson and try again", "Give up immediately", "Ignore the feedback"], answer: 0 },
      ]
    },
    {
      title: "Loops", content: "Loops repeat instructions. A for loop is useful when a task repeats a known number of times.", details: "Loops repeat instructions. A for loop is useful when a task repeats a known number of times. Study the example, then try the practice task in your own words. If a concept feels difficult, revisit the explanation and test yourself again.", examples: "for (let i = 1; i <= 3; i++) { console.log(i); }", practice: "Write a loop that prints numbers from 1 to 5.",
      quiz: [
        { question: "What is a loop used for?", options: ["Repeating instructions", "Naming files", "Styling text only"], answer: 0 },
        { question: "Which is the best way to learn this topic?", options: ["Read, practise and check your understanding", "Skip the explanation", "Memorize without understanding"], answer: 0 },
        { question: "What should you do if your first attempt is incorrect?", options: ["Review the lesson and try again", "Give up immediately", "Ignore the feedback"], answer: 0 },
      ]
    },
    {
      title: "Functions", content: "Functions group reusable instructions and can accept inputs called parameters.", details: "Functions group reusable instructions and can accept inputs called parameters. Study the example, then try the practice task in your own words. If a concept feels difficult, revisit the explanation and test yourself again.", examples: "function add(a, b) { return a + b; }", practice: "Create a function that multiplies two numbers.",
      quiz: [
        { question: "Why use a function?", options: ["Reuse code", "Make a monitor brighter", "Replace a browser"], answer: 0 },
        { question: "Which is the best way to learn this topic?", options: ["Read, practise and check your understanding", "Skip the explanation", "Memorize without understanding"], answer: 0 },
        { question: "What should you do if your first attempt is incorrect?", options: ["Review the lesson and try again", "Give up immediately", "Ignore the feedback"], answer: 0 },
      ]
    },
    {
      title: "Arrays", content: "Arrays store ordered collections of values. JavaScript array indexes start at zero.", details: "Arrays store ordered collections of values. JavaScript array indexes start at zero. Study the example, then try the practice task in your own words. If a concept feels difficult, revisit the explanation and test yourself again.", examples: "const colors = ['red', 'blue']; colors.push('green');", practice: "Create an array of three favourite subjects.",
      quiz: [
        { question: "What does an array store?", options: ["A collection of values", "Only one web page", "A Wi-Fi signal"], answer: 0 },
        { question: "Which is the best way to learn this topic?", options: ["Read, practise and check your understanding", "Skip the explanation", "Memorize without understanding"], answer: 0 },
        { question: "What should you do if your first attempt is incorrect?", options: ["Review the lesson and try again", "Give up immediately", "Ignore the feedback"], answer: 0 },
      ]
    },
    {
      title: "Objects", content: "Objects group related information using key-value pairs.", details: "Objects group related information using key-value pairs. Study the example, then try the practice task in your own words. If a concept feels difficult, revisit the explanation and test yourself again.", examples: "const learner = { name: 'Ayan', age: 17 };", practice: "Create an object describing a book.",
      quiz: [
        { question: "Which brackets define an object literal?", options: ["{}", "[]", "()"], answer: 0 },
        { question: "Which is the best way to learn this topic?", options: ["Read, practise and check your understanding", "Skip the explanation", "Memorize without understanding"], answer: 0 },
        { question: "What should you do if your first attempt is incorrect?", options: ["Review the lesson and try again", "Give up immediately", "Ignore the feedback"], answer: 0 },
      ]
    },
    {
      title: "HTML Basics", content: "HTML provides the structure of a web page using elements and tags.", details: "HTML provides the structure of a web page using elements and tags. Study the example, then try the practice task in your own words. If a concept feels difficult, revisit the explanation and test yourself again.", examples: "<h1>Welcome</h1><p>Learn with us.</p>", practice: "Write a heading and a paragraph in HTML.",
      quiz: [
        { question: "What is HTML mainly used for?", options: ["Web page structure", "Database encryption", "Power supply"], answer: 0 },
        { question: "Which is the best way to learn this topic?", options: ["Read, practise and check your understanding", "Skip the explanation", "Memorize without understanding"], answer: 0 },
        { question: "What should you do if your first attempt is incorrect?", options: ["Review the lesson and try again", "Give up immediately", "Ignore the feedback"], answer: 0 },
      ]
    },
    {
      title: "CSS Basics", content: "CSS controls presentation such as colours, spacing, layout and typography.", details: "CSS controls presentation such as colours, spacing, layout and typography. Study the example, then try the practice task in your own words. If a concept feels difficult, revisit the explanation and test yourself again.", examples: "h1 { color: purple; }", practice: "Style a heading with a colour and larger font size.",
      quiz: [
        { question: "What does CSS control?", options: ["Presentation and layout", "Only passwords", "Computer memory"], answer: 0 },
        { question: "Which is the best way to learn this topic?", options: ["Read, practise and check your understanding", "Skip the explanation", "Memorize without understanding"], answer: 0 },
        { question: "What should you do if your first attempt is incorrect?", options: ["Review the lesson and try again", "Give up immediately", "Ignore the feedback"], answer: 0 },
      ]
    },
    {
      title: "JavaScript Basics", content: "JavaScript adds behaviour to web pages and can respond to user actions.", details: "JavaScript adds behaviour to web pages and can respond to user actions. Study the example, then try the practice task in your own words. If a concept feels difficult, revisit the explanation and test yourself again.", examples: "document.querySelector('button').textContent = 'Start';", practice: "Describe one interactive feature for a website.",
      quiz: [
        { question: "What can JavaScript add to a page?", options: ["Interactivity", "Physical buttons", "Electricity"], answer: 0 },
        { question: "Which is the best way to learn this topic?", options: ["Read, practise and check your understanding", "Skip the explanation", "Memorize without understanding"], answer: 0 },
        { question: "What should you do if your first attempt is incorrect?", options: ["Review the lesson and try again", "Give up immediately", "Ignore the feedback"], answer: 0 },
      ]
    },
  ] },
  networking: { title: "🌐 Networking", description: "Understand how devices connect, communicate and share data.", lessons: [
    {
      title: "Network Basics", content: "A network connects devices so they can exchange data and share resources.", details: "A network connects devices so they can exchange data and share resources. Study the example, then try the practice task in your own words. If a concept feels difficult, revisit the explanation and test yourself again.", examples: "Example: computers in a school lab sharing a printer.", practice: "Name two benefits of networking.",
      quiz: [
        { question: "What is a network?", options: ["Connected devices that exchange data", "A single offline keyboard", "A screen type"], answer: 0 },
        { question: "Which is the best way to learn this topic?", options: ["Read, practise and check your understanding", "Skip the explanation", "Memorize without understanding"], answer: 0 },
        { question: "What should you do if your first attempt is incorrect?", options: ["Review the lesson and try again", "Give up immediately", "Ignore the feedback"], answer: 0 },
      ]
    },
    {
      title: "LAN and WAN", content: "A LAN covers a limited local area; a WAN connects networks across larger distances.", details: "A LAN covers a limited local area; a WAN connects networks across larger distances. Study the example, then try the practice task in your own words. If a concept feels difficult, revisit the explanation and test yourself again.", examples: "Home Wi-Fi is usually a LAN; the internet connects networks globally.", practice: "Give one example of a LAN and a WAN.",
      quiz: [
        { question: "What area does a LAN usually cover?", options: ["A limited local area", "The entire planet only", "A galaxy"], answer: 0 },
        { question: "Which is the best way to learn this topic?", options: ["Read, practise and check your understanding", "Skip the explanation", "Memorize without understanding"], answer: 0 },
        { question: "What should you do if your first attempt is incorrect?", options: ["Review the lesson and try again", "Give up immediately", "Ignore the feedback"], answer: 0 },
      ]
    },
    {
      title: "IP Addresses", content: "An IP address identifies a network interface for communication.", details: "An IP address identifies a network interface for communication. Study the example, then try the practice task in your own words. If a concept feels difficult, revisit the explanation and test yourself again.", examples: "Example IPv4 format: 192.168.1.10", practice: "Explain why devices need IP addresses.",
      quiz: [
        { question: "What is an IP address used for?", options: ["Identifying an interface on an IP network", "Changing screen size", "Charging a device"], answer: 0 },
        { question: "Which is the best way to learn this topic?", options: ["Read, practise and check your understanding", "Skip the explanation", "Memorize without understanding"], answer: 0 },
        { question: "What should you do if your first attempt is incorrect?", options: ["Review the lesson and try again", "Give up immediately", "Ignore the feedback"], answer: 0 },
      ]
    },
    {
      title: "Routers", content: "Routers forward packets between networks using addressing information.", details: "Routers forward packets between networks using addressing information. Study the example, then try the practice task in your own words. If a concept feels difficult, revisit the explanation and test yourself again.", examples: "A home router connects a local network to an internet connection.", practice: "Describe the role of a router.",
      quiz: [
        { question: "What does a router do?", options: ["Forwards packets between networks", "Prints paper", "Stores keyboard keys"], answer: 0 },
        { question: "Which is the best way to learn this topic?", options: ["Read, practise and check your understanding", "Skip the explanation", "Memorize without understanding"], answer: 0 },
        { question: "What should you do if your first attempt is incorrect?", options: ["Review the lesson and try again", "Give up immediately", "Ignore the feedback"], answer: 0 },
      ]
    },
    {
      title: "Switches", content: "A switch connects devices within a local network and forwards frames to appropriate ports.", details: "A switch connects devices within a local network and forwards frames to appropriate ports. Study the example, then try the practice task in your own words. If a concept feels difficult, revisit the explanation and test yourself again.", examples: "Several desktop computers connect to a central Ethernet switch.", practice: "Explain one difference between a router and a switch.",
      quiz: [
        { question: "What does a LAN switch connect?", options: ["Devices on a local network", "Only distant countries directly", "Power outlets"], answer: 0 },
        { question: "Which is the best way to learn this topic?", options: ["Read, practise and check your understanding", "Skip the explanation", "Memorize without understanding"], answer: 0 },
        { question: "What should you do if your first attempt is incorrect?", options: ["Review the lesson and try again", "Give up immediately", "Ignore the feedback"], answer: 0 },
      ]
    },
    {
      title: "DNS", content: "DNS looks up records associated with domain names, including IP addresses.", details: "DNS looks up records associated with domain names, including IP addresses. Study the example, then try the practice task in your own words. If a concept feels difficult, revisit the explanation and test yourself again.", examples: "A browser may use DNS to find the address associated with a website name.", practice: "Explain DNS in your own words.",
      quiz: [
        { question: "What does DNS help look up?", options: ["Domain records such as IP addresses", "Text-to-electricity conversion", "Image colours"], answer: 0 },
        { question: "Which is the best way to learn this topic?", options: ["Read, practise and check your understanding", "Skip the explanation", "Memorize without understanding"], answer: 0 },
        { question: "What should you do if your first attempt is incorrect?", options: ["Review the lesson and try again", "Give up immediately", "Ignore the feedback"], answer: 0 },
      ]
    },
    {
      title: "DHCP", content: "DHCP can automatically provide IP configuration to devices joining a network.", details: "DHCP can automatically provide IP configuration to devices joining a network. Study the example, then try the practice task in your own words. If a concept feels difficult, revisit the explanation and test yourself again.", examples: "A phone joining home Wi-Fi often receives network settings automatically.", practice: "Name two settings DHCP may provide.",
      quiz: [
        { question: "What does DHCP commonly do?", options: ["Assign network settings automatically", "Encrypt every file", "Create web colours"], answer: 0 },
        { question: "Which is the best way to learn this topic?", options: ["Read, practise and check your understanding", "Skip the explanation", "Memorize without understanding"], answer: 0 },
        { question: "What should you do if your first attempt is incorrect?", options: ["Review the lesson and try again", "Give up immediately", "Ignore the feedback"], answer: 0 },
      ]
    },
    {
      title: "Network Protocols", content: "Protocols are agreed rules that systems use to communicate.", details: "Protocols are agreed rules that systems use to communicate. Study the example, then try the practice task in your own words. If a concept feels difficult, revisit the explanation and test yourself again.", examples: "HTTP/HTTPS are used for web communication; TCP supports reliable transport.", practice: "Name two network protocols.",
      quiz: [
        { question: "What is a protocol?", options: ["A set of communication rules", "A chair type", "A screen resolution"], answer: 0 },
        { question: "Which is the best way to learn this topic?", options: ["Read, practise and check your understanding", "Skip the explanation", "Memorize without understanding"], answer: 0 },
        { question: "What should you do if your first attempt is incorrect?", options: ["Review the lesson and try again", "Give up immediately", "Ignore the feedback"], answer: 0 },
      ]
    },
    {
      title: "Network Security", content: "Network security uses controls to protect networked systems and information.", details: "Network security uses controls to protect networked systems and information. Study the example, then try the practice task in your own words. If a concept feels difficult, revisit the explanation and test yourself again.", examples: "Use secure Wi-Fi settings, strong authentication, updates and firewalls.", practice: "List three ways to improve home network security.",
      quiz: [
        { question: "Which is a useful security practice?", options: ["Update router firmware", "Share the Wi-Fi password publicly", "Ignore updates"], answer: 0 },
        { question: "Which is the best way to learn this topic?", options: ["Read, practise and check your understanding", "Skip the explanation", "Memorize without understanding"], answer: 0 },
        { question: "What should you do if your first attempt is incorrect?", options: ["Review the lesson and try again", "Give up immediately", "Ignore the feedback"], answer: 0 },
      ]
    },
    {
      title: "Troubleshooting", content: "Troubleshooting checks likely causes in a logical order to find a connection problem.", details: "Troubleshooting checks likely causes in a logical order to find a connection problem. Study the example, then try the practice task in your own words. If a concept feels difficult, revisit the explanation and test yourself again.", examples: "Check power and cables, Wi-Fi status, settings, and whether other devices are affected.", practice: "Write a troubleshooting checklist.",
      quiz: [
        { question: "What is a sensible first step?", options: ["Check connection and power", "Delete all files", "Replace every device immediately"], answer: 0 },
        { question: "Which is the best way to learn this topic?", options: ["Read, practise and check your understanding", "Skip the explanation", "Memorize without understanding"], answer: 0 },
        { question: "What should you do if your first attempt is incorrect?", options: ["Review the lesson and try again", "Give up immediately", "Ignore the feedback"], answer: 0 },
      ]
    },
  ] },
  cybersecurity: { title: "🔐 Cybersecurity", description: "Build safer digital habits and understand common online threats.", lessons: [
    {
      title: "Security Basics", content: "Cybersecurity protects systems, networks and information from digital threats.", details: "Cybersecurity protects systems, networks and information from digital threats. Study the example, then try the practice task in your own words. If a concept feels difficult, revisit the explanation and test yourself again.", examples: "Keeping devices updated helps address known security weaknesses.", practice: "Name two things cybersecurity protects.",
      quiz: [
        { question: "What is cybersecurity for?", options: ["Protecting systems and information", "Making passwords public", "Disabling every device"], answer: 0 },
        { question: "Which is the best way to learn this topic?", options: ["Read, practise and check your understanding", "Skip the explanation", "Memorize without understanding"], answer: 0 },
        { question: "What should you do if your first attempt is incorrect?", options: ["Review the lesson and try again", "Give up immediately", "Ignore the feedback"], answer: 0 },
      ]
    },
    {
      title: "Strong Passwords", content: "Long, unique passwords help protect accounts. A password manager can help store them safely.", details: "Long, unique passwords help protect accounts. A password manager can help store them safely. Study the example, then try the practice task in your own words. If a concept feels difficult, revisit the explanation and test yourself again.", examples: "Use a unique passphrase for every account and enable MFA where possible. Never share real passwords in exercises.", practice: "List three safe password habits.",
      quiz: [
        { question: "What is a good password habit?", options: ["Use unique passwords", "Reuse one password everywhere", "Post it publicly"], answer: 0 },
        { question: "Which is the best way to learn this topic?", options: ["Read, practise and check your understanding", "Skip the explanation", "Memorize without understanding"], answer: 0 },
        { question: "What should you do if your first attempt is incorrect?", options: ["Review the lesson and try again", "Give up immediately", "Ignore the feedback"], answer: 0 },
      ]
    },
    {
      title: "Phishing", content: "Phishing messages try to trick people into revealing information or taking unsafe actions.", details: "Phishing messages try to trick people into revealing information or taking unsafe actions. Study the example, then try the practice task in your own words. If a concept feels difficult, revisit the explanation and test yourself again.", examples: "An unexpected urgent message with an unfamiliar login link may be phishing.", practice: "Write three warning signs of phishing.",
      quiz: [
        { question: "What should you do with a suspicious link?", options: ["Verify through an official channel", "Enter your password immediately", "Forward it to everyone"], answer: 0 },
        { question: "Which is the best way to learn this topic?", options: ["Read, practise and check your understanding", "Skip the explanation", "Memorize without understanding"], answer: 0 },
        { question: "What should you do if your first attempt is incorrect?", options: ["Review the lesson and try again", "Give up immediately", "Ignore the feedback"], answer: 0 },
      ]
    },
    {
      title: "Malware", content: "Malware is software designed to harm systems or access data without permission.", details: "Malware is software designed to harm systems or access data without permission. Study the example, then try the practice task in your own words. If a concept feels difficult, revisit the explanation and test yourself again.", examples: "Ransomware may lock files and demand payment. Avoid untrusted downloads and keep software updated.", practice: "Name two malware types and one prevention step.",
      quiz: [
        { question: "Which malware may lock files for ransom?", options: ["Ransomware", "Calculator", "Calendar"], answer: 0 },
        { question: "Which is the best way to learn this topic?", options: ["Read, practise and check your understanding", "Skip the explanation", "Memorize without understanding"], answer: 0 },
        { question: "What should you do if your first attempt is incorrect?", options: ["Review the lesson and try again", "Give up immediately", "Ignore the feedback"], answer: 0 },
      ]
    },
    {
      title: "Encryption", content: "Encryption transforms readable data into a form that requires the right key to read.", details: "Encryption transforms readable data into a form that requires the right key to read. Study the example, then try the practice task in your own words. If a concept feels difficult, revisit the explanation and test yourself again.", examples: "HTTPS helps protect data exchanged with a website while in transit.", practice: "Explain why encryption is useful.",
      quiz: [
        { question: "What is encryption intended to do?", options: ["Protect data from being read without the right key", "Make all data public", "Delete every file"], answer: 0 },
        { question: "Which is the best way to learn this topic?", options: ["Read, practise and check your understanding", "Skip the explanation", "Memorize without understanding"], answer: 0 },
        { question: "What should you do if your first attempt is incorrect?", options: ["Review the lesson and try again", "Give up immediately", "Ignore the feedback"], answer: 0 },
      ]
    },
    {
      title: "Firewalls", content: "A firewall filters network traffic according to defined rules.", details: "A firewall filters network traffic according to defined rules. Study the example, then try the practice task in your own words. If a concept feels difficult, revisit the explanation and test yourself again.", examples: "A firewall may block unexpected incoming connections, but it is only one layer of defence.", practice: "What does a firewall help control?",
      quiz: [
        { question: "What does a firewall filter?", options: ["Network traffic", "Keyboard letters", "Monitor brightness"], answer: 0 },
        { question: "Which is the best way to learn this topic?", options: ["Read, practise and check your understanding", "Skip the explanation", "Memorize without understanding"], answer: 0 },
        { question: "What should you do if your first attempt is incorrect?", options: ["Review the lesson and try again", "Give up immediately", "Ignore the feedback"], answer: 0 },
      ]
    },
    {
      title: "Authentication and MFA", content: "Authentication checks a claimed identity. MFA uses more than one type of evidence.", details: "Authentication checks a claimed identity. MFA uses more than one type of evidence. Study the example, then try the practice task in your own words. If a concept feels difficult, revisit the explanation and test yourself again.", examples: "A password plus an authenticator-app approval is an example of MFA.", practice: "Explain how MFA adds protection.",
      quiz: [
        { question: "MFA uses:", options: ["More than one factor", "Only a username", "No verification"], answer: 0 },
        { question: "Which is the best way to learn this topic?", options: ["Read, practise and check your understanding", "Skip the explanation", "Memorize without understanding"], answer: 0 },
        { question: "What should you do if your first attempt is incorrect?", options: ["Review the lesson and try again", "Give up immediately", "Ignore the feedback"], answer: 0 },
      ]
    },
    {
      title: "Online Privacy", content: "Privacy involves understanding and controlling how personal information is shared.", details: "Privacy involves understanding and controlling how personal information is shared. Study the example, then try the practice task in your own words. If a concept feels difficult, revisit the explanation and test yourself again.", examples: "Review app permissions and limit public personal details and unnecessary location sharing.", practice: "Name three ways to protect privacy.",
      quiz: [
        { question: "Which action supports privacy?", options: ["Review app permissions", "Post private details publicly", "Accept every request"], answer: 0 },
        { question: "Which is the best way to learn this topic?", options: ["Read, practise and check your understanding", "Skip the explanation", "Memorize without understanding"], answer: 0 },
        { question: "What should you do if your first attempt is incorrect?", options: ["Review the lesson and try again", "Give up immediately", "Ignore the feedback"], answer: 0 },
      ]
    },
    {
      title: "Safe Browsing", content: "Safe browsing means checking websites and downloads before trusting them.", details: "Safe browsing means checking websites and downloads before trusting them. Study the example, then try the practice task in your own words. If a concept feels difficult, revisit the explanation and test yourself again.", examples: "Check domain spelling, avoid unexpected downloads and use known official bookmarks for important accounts.", practice: "Write a safe-browsing checklist.",
      quiz: [
        { question: "Does HTTPS alone prove a website is honest?", options: ["No", "Yes, always", "Only on mobile"], answer: 0 },
        { question: "Which is the best way to learn this topic?", options: ["Read, practise and check your understanding", "Skip the explanation", "Memorize without understanding"], answer: 0 },
        { question: "What should you do if your first attempt is incorrect?", options: ["Review the lesson and try again", "Give up immediately", "Ignore the feedback"], answer: 0 },
      ]
    },
    {
      title: "Security Best Practices", content: "Good security combines updates, backups, access control and cautious behaviour.", details: "Good security combines updates, backups, access control and cautious behaviour. Study the example, then try the practice task in your own words. If a concept feels difficult, revisit the explanation and test yourself again.", examples: "Keep backups, enable MFA, lock devices and report suspicious activity.", practice: "Create a five-point device security checklist.",
      quiz: [
        { question: "Good security usually uses:", options: ["Multiple layers of protection", "One magic tool only", "No updates"], answer: 0 },
        { question: "Which is the best way to learn this topic?", options: ["Read, practise and check your understanding", "Skip the explanation", "Memorize without understanding"], answer: 0 },
        { question: "What should you do if your first attempt is incorrect?", options: ["Review the lesson and try again", "Give up immediately", "Ignore the feedback"], answer: 0 },
      ]
    },
  ] },
  mathematics: { title: "➗ Mathematics", description: "Practise number skills, algebra, geometry and everyday problem-solving.", lessons: [
    {
      title: "Basic Arithmetic", content: "Arithmetic includes addition, subtraction, multiplication and division.", details: "Arithmetic includes addition, subtraction, multiplication and division. Study the example, then try the practice task in your own words. If a concept feels difficult, revisit the explanation and test yourself again.", examples: "8 + 4 = 12; 10 - 3 = 7; 5 × 3 = 15; 20 ÷ 4 = 5.", practice: "Solve: 14 + 9, 22 - 8, 7 × 6 and 36 ÷ 4.",
      quiz: [
        { question: "What is 7 × 3?", options: ["21", "10", "24"], answer: 0 },
        { question: "Which is the best way to learn this topic?", options: ["Read, practise and check your understanding", "Skip the explanation", "Memorize without understanding"], answer: 0 },
        { question: "What should you do if your first attempt is incorrect?", options: ["Review the lesson and try again", "Give up immediately", "Ignore the feedback"], answer: 0 },
      ]
    },
    {
      title: "Fractions", content: "A fraction represents part of a whole. The numerator is above the line and denominator below it.", details: "A fraction represents part of a whole. The numerator is above the line and denominator below it. Study the example, then try the practice task in your own words. If a concept feels difficult, revisit the explanation and test yourself again.", examples: "1/2 = 2/4. In 3/8, 3 is the numerator and 8 is the denominator.", practice: "Explain the numerator and denominator in 4/7.",
      quiz: [
        { question: "In 3/8, what is the denominator?", options: ["3", "8", "11"], answer: 1 },
        { question: "Which is the best way to learn this topic?", options: ["Read, practise and check your understanding", "Skip the explanation", "Memorize without understanding"], answer: 0 },
        { question: "What should you do if your first attempt is incorrect?", options: ["Review the lesson and try again", "Give up immediately", "Ignore the feedback"], answer: 0 },
      ]
    },
    {
      title: "Decimals", content: "Decimals represent values using a decimal point and place values.", details: "Decimals represent values using a decimal point and place values. Study the example, then try the practice task in your own words. If a concept feels difficult, revisit the explanation and test yourself again.", examples: "2.5 + 1.2 = 3.7. Line up decimal points when adding or subtracting.", practice: "Calculate 4.6 + 2.1 and 8.5 - 3.2.",
      quiz: [
        { question: "What is 1.5 + 2.5?", options: ["4.0", "3.0", "5.5"], answer: 0 },
        { question: "Which is the best way to learn this topic?", options: ["Read, practise and check your understanding", "Skip the explanation", "Memorize without understanding"], answer: 0 },
        { question: "What should you do if your first attempt is incorrect?", options: ["Review the lesson and try again", "Give up immediately", "Ignore the feedback"], answer: 0 },
      ]
    },
    {
      title: "Percentages", content: "A percentage expresses a quantity per hundred.", details: "A percentage expresses a quantity per hundred. Study the example, then try the practice task in your own words. If a concept feels difficult, revisit the explanation and test yourself again.", examples: "25% of 80 = 0.25 × 80 = 20.", practice: "Find 10% of 250 and 50% of 36.",
      quiz: [
        { question: "What is 50% of 40?", options: ["20", "10", "30"], answer: 0 },
        { question: "Which is the best way to learn this topic?", options: ["Read, practise and check your understanding", "Skip the explanation", "Memorize without understanding"], answer: 0 },
        { question: "What should you do if your first attempt is incorrect?", options: ["Review the lesson and try again", "Give up immediately", "Ignore the feedback"], answer: 0 },
      ]
    },
    {
      title: "Algebra Basics", content: "Algebra uses letters to represent unknown or changing values.", details: "Algebra uses letters to represent unknown or changing values. Study the example, then try the practice task in your own words. If a concept feels difficult, revisit the explanation and test yourself again.", examples: "If x + 3 = 7, then x = 4.", practice: "Write an expression for five more than n.",
      quiz: [
        { question: "In x + 2 = 6, what is x?", options: ["4", "8", "2"], answer: 0 },
        { question: "Which is the best way to learn this topic?", options: ["Read, practise and check your understanding", "Skip the explanation", "Memorize without understanding"], answer: 0 },
        { question: "What should you do if your first attempt is incorrect?", options: ["Review the lesson and try again", "Give up immediately", "Ignore the feedback"], answer: 0 },
      ]
    },
    {
      title: "Equations", content: "Solving an equation means finding values that make it true.", details: "Solving an equation means finding values that make it true. Study the example, then try the practice task in your own words. If a concept feels difficult, revisit the explanation and test yourself again.", examples: "2x = 10, so divide both sides by 2: x = 5.", practice: "Solve x - 4 = 9 and show your steps.",
      quiz: [
        { question: "Solve x + 5 = 12.", options: ["7", "17", "6"], answer: 0 },
        { question: "Which is the best way to learn this topic?", options: ["Read, practise and check your understanding", "Skip the explanation", "Memorize without understanding"], answer: 0 },
        { question: "What should you do if your first attempt is incorrect?", options: ["Review the lesson and try again", "Give up immediately", "Ignore the feedback"], answer: 0 },
      ]
    },
    {
      title: "Geometry", content: "Geometry studies shapes, sizes, angles and spatial relationships.", details: "Geometry studies shapes, sizes, angles and spatial relationships. Study the example, then try the practice task in your own words. If a concept feels difficult, revisit the explanation and test yourself again.", examples: "Rectangle area = length × width. A rectangle of length 5 and width 3 has area 15 square units.", practice: "Find the perimeter of a rectangle with length 6 and width 2.",
      quiz: [
        { question: "How many sides does a triangle have?", options: ["3", "4", "5"], answer: 0 },
        { question: "Which is the best way to learn this topic?", options: ["Read, practise and check your understanding", "Skip the explanation", "Memorize without understanding"], answer: 0 },
        { question: "What should you do if your first attempt is incorrect?", options: ["Review the lesson and try again", "Give up immediately", "Ignore the feedback"], answer: 0 },
      ]
    },
    {
      title: "Ratios", content: "A ratio compares quantities and can often be simplified by dividing by a common factor.", details: "A ratio compares quantities and can often be simplified by dividing by a common factor. Study the example, then try the practice task in your own words. If a concept feels difficult, revisit the explanation and test yourself again.", examples: "4:8 simplifies to 1:2.", practice: "Simplify the ratio 6:9.",
      quiz: [
        { question: "Simplify 4:8.", options: ["1:2", "2:1", "4:4"], answer: 0 },
        { question: "Which is the best way to learn this topic?", options: ["Read, practise and check your understanding", "Skip the explanation", "Memorize without understanding"], answer: 0 },
        { question: "What should you do if your first attempt is incorrect?", options: ["Review the lesson and try again", "Give up immediately", "Ignore the feedback"], answer: 0 },
      ]
    },
    {
      title: "Averages", content: "The arithmetic mean is the sum of values divided by the number of values.", details: "The arithmetic mean is the sum of values divided by the number of values. Study the example, then try the practice task in your own words. If a concept feels difficult, revisit the explanation and test yourself again.", examples: "Mean of 2, 4 and 6 = (2 + 4 + 6) ÷ 3 = 4.", practice: "Find the mean of 5, 7 and 9.",
      quiz: [
        { question: "Mean of 2, 4 and 6?", options: ["4", "6", "12"], answer: 0 },
        { question: "Which is the best way to learn this topic?", options: ["Read, practise and check your understanding", "Skip the explanation", "Memorize without understanding"], answer: 0 },
        { question: "What should you do if your first attempt is incorrect?", options: ["Review the lesson and try again", "Give up immediately", "Ignore the feedback"], answer: 0 },
      ]
    },
    {
      title: "Word Problems", content: "Word problems translate real situations into mathematical operations.", details: "Word problems translate real situations into mathematical operations. Study the example, then try the practice task in your own words. If a concept feels difficult, revisit the explanation and test yourself again.", examples: "Three notebooks cost 50 each. Total cost = 3 × 50 = 150.", practice: "A bus has 24 passengers. 7 get off and 5 get on. How many are on it now?",
      quiz: [
        { question: "A pen costs 20. What do 3 pens cost?", options: ["60", "23", "17"], answer: 0 },
        { question: "Which is the best way to learn this topic?", options: ["Read, practise and check your understanding", "Skip the explanation", "Memorize without understanding"], answer: 0 },
        { question: "What should you do if your first attempt is incorrect?", options: ["Review the lesson and try again", "Give up immediately", "Ignore the feedback"], answer: 0 },
      ]
    },
  ] },
  english: { title: "🇬🇧 English", description: "Improve grammar, vocabulary, reading and writing step by step.", lessons: [
    {
      title: "Parts of Speech", content: "Parts of speech describe the roles words play in a sentence.", details: "Parts of speech describe the roles words play in a sentence. Study the example, then try the practice task in your own words. If a concept feels difficult, revisit the explanation and test yourself again.", examples: "Noun: teacher; verb: read; adjective: bright; adverb: carefully.", practice: "Write one noun, verb and adjective.",
      quiz: [
        { question: "Which part of speech names a person, place or thing?", options: ["Noun", "Verb", "Adverb"], answer: 0 },
        { question: "Which is the best way to learn this topic?", options: ["Read, practise and check your understanding", "Skip the explanation", "Memorize without understanding"], answer: 0 },
        { question: "What should you do if your first attempt is incorrect?", options: ["Review the lesson and try again", "Give up immediately", "Ignore the feedback"], answer: 0 },
      ]
    },
    {
      title: "Present Tenses", content: "Simple present often describes routines. Present continuous describes actions happening now.", details: "Simple present often describes routines. Present continuous describes actions happening now. Study the example, then try the practice task in your own words. If a concept feels difficult, revisit the explanation and test yourself again.", examples: "Simple: She studies daily. Continuous: She is studying now.", practice: "Write one sentence about a habit and one about what you are doing now.",
      quiz: [
        { question: "Choose the correct sentence.", options: ["She plays football.", "She play football.", "She playing football."], answer: 0 },
        { question: "Which is the best way to learn this topic?", options: ["Read, practise and check your understanding", "Skip the explanation", "Memorize without understanding"], answer: 0 },
        { question: "What should you do if your first attempt is incorrect?", options: ["Review the lesson and try again", "Give up immediately", "Ignore the feedback"], answer: 0 },
      ]
    },
    {
      title: "Past and Future Tenses", content: "Past tense describes completed past actions. Future meaning can be expressed with will and other constructions.", details: "Past tense describes completed past actions. Future meaning can be expressed with will and other constructions. Study the example, then try the practice task in your own words. If a concept feels difficult, revisit the explanation and test yourself again.", examples: "Past: They visited us. Future: They will visit us.", practice: "Write a sentence about yesterday and tomorrow.",
      quiz: [
        { question: "Past tense of go is:", options: ["Went", "Goed", "Going"], answer: 0 },
        { question: "Which is the best way to learn this topic?", options: ["Read, practise and check your understanding", "Skip the explanation", "Memorize without understanding"], answer: 0 },
        { question: "What should you do if your first attempt is incorrect?", options: ["Review the lesson and try again", "Give up immediately", "Ignore the feedback"], answer: 0 },
      ]
    },
    {
      title: "Sentence Grammar", content: "Grammar arranges words into clear, correct sentences. Subject and verb forms should agree.", details: "Grammar arranges words into clear, correct sentences. Subject and verb forms should agree. Study the example, then try the practice task in your own words. If a concept feels difficult, revisit the explanation and test yourself again.", examples: "Correct: He goes to school. Incorrect: He go to school.", practice: "Correct: They is happy.",
      quiz: [
        { question: "Choose the correct sentence.", options: ["They are happy.", "They is happy.", "They be happy."], answer: 0 },
        { question: "Which is the best way to learn this topic?", options: ["Read, practise and check your understanding", "Skip the explanation", "Memorize without understanding"], answer: 0 },
        { question: "What should you do if your first attempt is incorrect?", options: ["Review the lesson and try again", "Give up immediately", "Ignore the feedback"], answer: 0 },
      ]
    },
    {
      title: "Vocabulary", content: "Vocabulary is the set of words a person knows and uses.", details: "Vocabulary is the set of words a person knows and uses. Study the example, then try the practice task in your own words. If a concept feels difficult, revisit the explanation and test yourself again.", examples: "Begin = start; large = big; quiet is an antonym of noisy.", practice: "Learn three words and write a sentence for each.",
      quiz: [
        { question: "A synonym of begin is:", options: ["Start", "Finish", "Forget"], answer: 0 },
        { question: "Which is the best way to learn this topic?", options: ["Read, practise and check your understanding", "Skip the explanation", "Memorize without understanding"], answer: 0 },
        { question: "What should you do if your first attempt is incorrect?", options: ["Review the lesson and try again", "Give up immediately", "Ignore the feedback"], answer: 0 },
      ]
    },
    {
      title: "Building Sentences", content: "A sentence expresses a complete thought and usually begins with a capital letter.", details: "A sentence expresses a complete thought and usually begins with a capital letter. Study the example, then try the practice task in your own words. If a concept feels difficult, revisit the explanation and test yourself again.", examples: "Statement: I am learning English. Question: Are you ready?", practice: "Write a statement, question and exclamation.",
      quiz: [
        { question: "Which is correctly written?", options: ["I am learning English.", "i am learning english", "I am learning english"], answer: 0 },
        { question: "Which is the best way to learn this topic?", options: ["Read, practise and check your understanding", "Skip the explanation", "Memorize without understanding"], answer: 0 },
        { question: "What should you do if your first attempt is incorrect?", options: ["Review the lesson and try again", "Give up immediately", "Ignore the feedback"], answer: 0 },
      ]
    },
    {
      title: "Prepositions", content: "Prepositions show relationships such as place, time or direction.", details: "Prepositions show relationships such as place, time or direction. Study the example, then try the practice task in your own words. If a concept feels difficult, revisit the explanation and test yourself again.", examples: "The book is on the desk. We meet at noon.", practice: "Write sentences using in, on and under.",
      quiz: [
        { question: "The book is ___ the table.", options: ["on", "quickly", "beautiful"], answer: 0 },
        { question: "Which is the best way to learn this topic?", options: ["Read, practise and check your understanding", "Skip the explanation", "Memorize without understanding"], answer: 0 },
        { question: "What should you do if your first attempt is incorrect?", options: ["Review the lesson and try again", "Give up immediately", "Ignore the feedback"], answer: 0 },
      ]
    },
    {
      title: "Articles", content: "A and an introduce nonspecific singular countable nouns; the often refers to something specific.", details: "A and an introduce nonspecific singular countable nouns; the often refers to something specific. Study the example, then try the practice task in your own words. If a concept feels difficult, revisit the explanation and test yourself again.", examples: "a book; an apple; the sun. Choose a/an based on the following sound.", practice: "Fill in a/an/the: umbrella, car, moon.",
      quiz: [
        { question: "Choose the correct phrase.", options: ["an apple", "a apple", "the an apple"], answer: 0 },
        { question: "Which is the best way to learn this topic?", options: ["Read, practise and check your understanding", "Skip the explanation", "Memorize without understanding"], answer: 0 },
        { question: "What should you do if your first attempt is incorrect?", options: ["Review the lesson and try again", "Give up immediately", "Ignore the feedback"], answer: 0 },
      ]
    },
    {
      title: "Punctuation", content: "Punctuation helps organize writing and clarify meaning.", details: "Punctuation helps organize writing and clarify meaning. Study the example, then try the practice task in your own words. If a concept feels difficult, revisit the explanation and test yourself again.", examples: "A full stop ends a statement; a question mark ends a direct question; commas separate items.", practice: "Add punctuation: where are you going",
      quiz: [
        { question: "Which mark ends a direct question?", options: ["?", "!", ","], answer: 0 },
        { question: "Which is the best way to learn this topic?", options: ["Read, practise and check your understanding", "Skip the explanation", "Memorize without understanding"], answer: 0 },
        { question: "What should you do if your first attempt is incorrect?", options: ["Review the lesson and try again", "Give up immediately", "Ignore the feedback"], answer: 0 },
      ]
    },
    {
      title: "Reading and Writing", content: "Reading builds understanding; writing communicates ideas clearly.", details: "Reading builds understanding; writing communicates ideas clearly. Study the example, then try the practice task in your own words. If a concept feels difficult, revisit the explanation and test yourself again.", examples: "Identify the main idea and supporting details. Plan paragraphs and revise for clarity.", practice: "Write a short paragraph about a skill you want to learn.",
      quiz: [
        { question: "What is a main idea?", options: ["The central point of a text", "The last punctuation mark", "A random detail only"], answer: 0 },
        { question: "Which is the best way to learn this topic?", options: ["Read, practise and check your understanding", "Skip the explanation", "Memorize without understanding"], answer: 0 },
        { question: "What should you do if your first attempt is incorrect?", options: ["Review the lesson and try again", "Give up immediately", "Ignore the feedback"], answer: 0 },
      ]
    },
  ] },
  general: { title: "🌍 General Knowledge", description: "Explore science, geography, history, nature and the world around you.", lessons: [
    {
      title: "Solar System", content: "The Solar System includes the Sun and objects that orbit it. There are eight recognized planets.", details: "The Solar System includes the Sun and objects that orbit it. There are eight recognized planets. Study the example, then try the practice task in your own words. If a concept feels difficult, revisit the explanation and test yourself again.", examples: "Planets in order: Mercury, Venus, Earth, Mars, Jupiter, Saturn, Uranus, Neptune.", practice: "Name Earth and two other planets.",
      quiz: [
        { question: "Which planet is third from the Sun?", options: ["Earth", "Mars", "Jupiter"], answer: 0 },
        { question: "Which is the best way to learn this topic?", options: ["Read, practise and check your understanding", "Skip the explanation", "Memorize without understanding"], answer: 0 },
        { question: "What should you do if your first attempt is incorrect?", options: ["Review the lesson and try again", "Give up immediately", "Ignore the feedback"], answer: 0 },
      ]
    },
    {
      title: "World Geography", content: "Geography studies Earth's places, environments and physical features.", details: "Geography studies Earth's places, environments and physical features. Study the example, then try the practice task in your own words. If a concept feels difficult, revisit the explanation and test yourself again.", examples: "The Pacific is the largest ocean; Asia is the largest continent by area.", practice: "Name two continents and two oceans.",
      quiz: [
        { question: "Which is the largest ocean?", options: ["Pacific Ocean", "Indian Ocean", "Arctic Ocean"], answer: 0 },
        { question: "Which is the best way to learn this topic?", options: ["Read, practise and check your understanding", "Skip the explanation", "Memorize without understanding"], answer: 0 },
        { question: "What should you do if your first attempt is incorrect?", options: ["Review the lesson and try again", "Give up immediately", "Ignore the feedback"], answer: 0 },
      ]
    },
    {
      title: "The Human Body", content: "Organs and systems work together. The heart pumps blood and lungs help with breathing.", details: "Organs and systems work together. The heart pumps blood and lungs help with breathing. Study the example, then try the practice task in your own words. If a concept feels difficult, revisit the explanation and test yourself again.", examples: "The circulatory system includes the heart and blood vessels.", practice: "Name three organs and one function of each.",
      quiz: [
        { question: "Which organ pumps blood?", options: ["Heart", "Lungs", "Stomach"], answer: 0 },
        { question: "Which is the best way to learn this topic?", options: ["Read, practise and check your understanding", "Skip the explanation", "Memorize without understanding"], answer: 0 },
        { question: "What should you do if your first attempt is incorrect?", options: ["Review the lesson and try again", "Give up immediately", "Ignore the feedback"], answer: 0 },
      ]
    },
    {
      title: "Basic Science", content: "Science uses observation and testing to understand the natural world.", details: "Science uses observation and testing to understand the natural world. Study the example, then try the practice task in your own words. If a concept feels difficult, revisit the explanation and test yourself again.", examples: "A fair experiment controls other factors where possible and measures results.", practice: "Describe a simple experiment and what you would measure.",
      quiz: [
        { question: "Science relies on:", options: ["Evidence and testing", "Guessing only", "Rumours"], answer: 0 },
        { question: "Which is the best way to learn this topic?", options: ["Read, practise and check your understanding", "Skip the explanation", "Memorize without understanding"], answer: 0 },
        { question: "What should you do if your first attempt is incorrect?", options: ["Review the lesson and try again", "Give up immediately", "Ignore the feedback"], answer: 0 },
      ]
    },
    {
      title: "Environment", content: "The environment includes living things and their surroundings.", details: "The environment includes living things and their surroundings. Study the example, then try the practice task in your own words. If a concept feels difficult, revisit the explanation and test yourself again.", examples: "Conserving water, reducing waste and protecting habitats can reduce environmental impact.", practice: "List three actions that can help the environment.",
      quiz: [
        { question: "Which action can reduce waste?", options: ["Recycle suitable materials", "Throw rubbish into rivers", "Burn all rubbish outdoors"], answer: 0 },
        { question: "Which is the best way to learn this topic?", options: ["Read, practise and check your understanding", "Skip the explanation", "Memorize without understanding"], answer: 0 },
        { question: "What should you do if your first attempt is incorrect?", options: ["Review the lesson and try again", "Give up immediately", "Ignore the feedback"], answer: 0 },
      ]
    },
    {
      title: "History", content: "History studies people and events of the past using evidence.", details: "History studies people and events of the past using evidence. Study the example, then try the practice task in your own words. If a concept feels difficult, revisit the explanation and test yourself again.", examples: "Historians examine documents, objects, buildings and oral accounts; sources may have limitations.", practice: "Name two types of evidence historians might study.",
      quiz: [
        { question: "What does history study?", options: ["People and events of the past", "Only future predictions", "Only mathematics"], answer: 0 },
        { question: "Which is the best way to learn this topic?", options: ["Read, practise and check your understanding", "Skip the explanation", "Memorize without understanding"], answer: 0 },
        { question: "What should you do if your first attempt is incorrect?", options: ["Review the lesson and try again", "Give up immediately", "Ignore the feedback"], answer: 0 },
      ]
    },
    {
      title: "Inventions and Discoveries", content: "An invention creates a device or process; a discovery identifies something previously unknown.", details: "An invention creates a device or process; a discovery identifies something previously unknown. Study the example, then try the practice task in your own words. If a concept feels difficult, revisit the explanation and test yourself again.", examples: "The printing press helped spread written information more widely.", practice: "Name one invention and how it helps people.",
      quiz: [
        { question: "An invention is usually:", options: ["A created device or process", "A type of ocean", "A planet"], answer: 0 },
        { question: "Which is the best way to learn this topic?", options: ["Read, practise and check your understanding", "Skip the explanation", "Memorize without understanding"], answer: 0 },
        { question: "What should you do if your first attempt is incorrect?", options: ["Review the lesson and try again", "Give up immediately", "Ignore the feedback"], answer: 0 },
      ]
    },
    {
      title: "Technology Around Us", content: "Technology includes tools and systems used to solve problems.", details: "Technology includes tools and systems used to solve problems. Study the example, then try the practice task in your own words. If a concept feels difficult, revisit the explanation and test yourself again.", examples: "Digital technology supports communication, learning, healthcare and transport, but privacy and reliability matter too.", practice: "Describe one technology you use and one benefit.",
      quiz: [
        { question: "Which is digital technology?", options: ["A video-call app", "A wooden spoon", "A paper clip"], answer: 0 },
        { question: "Which is the best way to learn this topic?", options: ["Read, practise and check your understanding", "Skip the explanation", "Memorize without understanding"], answer: 0 },
        { question: "What should you do if your first attempt is incorrect?", options: ["Review the lesson and try again", "Give up immediately", "Ignore the feedback"], answer: 0 },
      ]
    },
    {
      title: "Animals and Nature", content: "Animals and plants interact with their environments. Habitats provide food, water and shelter.", details: "Animals and plants interact with their environments. Habitats provide food, water and shelter. Study the example, then try the practice task in your own words. If a concept feels difficult, revisit the explanation and test yourself again.", examples: "A simple food chain could be grass → rabbit → fox.", practice: "Name an animal, its habitat and one thing it eats.",
      quiz: [
        { question: "What does a habitat provide?", options: ["Resources an organism needs", "Only toys", "A computer password"], answer: 0 },
        { question: "Which is the best way to learn this topic?", options: ["Read, practise and check your understanding", "Skip the explanation", "Memorize without understanding"], answer: 0 },
        { question: "What should you do if your first attempt is incorrect?", options: ["Review the lesson and try again", "Give up immediately", "Ignore the feedback"], answer: 0 },
      ]
    },
    {
      title: "World Facts and Critical Thinking", content: "Critical thinking means checking claims, evidence, dates and sources before accepting them.", details: "Critical thinking means checking claims, evidence, dates and sources before accepting them. Study the example, then try the practice task in your own words. If a concept feels difficult, revisit the explanation and test yourself again.", examples: "Compare surprising claims with reliable sources and look for supporting evidence.", practice: "Choose a topic and write two questions to investigate.",
      quiz: [
        { question: "How should you check a surprising claim?", options: ["Check evidence and reliable sources", "Share it immediately", "Trust it because it is exciting"], answer: 0 },
        { question: "Which is the best way to learn this topic?", options: ["Read, practise and check your understanding", "Skip the explanation", "Memorize without understanding"], answer: 0 },
        { question: "What should you do if your first attempt is incorrect?", options: ["Review the lesson and try again", "Give up immediately", "Ignore the feedback"], answer: 0 },
      ]
    },
  ] },
};

const params = new URLSearchParams(window.location.search);
const subject = params.get("subject");
const course = courses[subject];
const titleEl = document.getElementById("courseTitle");
const descriptionEl = document.getElementById("courseDescription");
const lessonsEl = document.getElementById("lessons");
const progressEl = document.getElementById("progress");

if (!titleEl || !descriptionEl || !lessonsEl || !progressEl) {
  console.error("Course page is missing required IDs: courseTitle, courseDescription, lessons, progress.");
} else if (!course) {
  titleEl.textContent = "Course not found";
  descriptionEl.textContent = "Return to Explore Subjects and choose a course.";
  document.title = "Course not found | Leran the skills";
} else {
  titleEl.textContent = course.title;
  descriptionEl.textContent = course.description;
  document.title = course.title + " | Leran the skills";
  const storageKey = "courseProgress_" + subject;
  let completed = [];
  try {
    completed = JSON.parse(localStorage.getItem(storageKey) || "[]");
    if (!Array.isArray(completed)) completed = [];
  } catch (error) { completed = []; }

  function updateProgress() {
    const percent = course.lessons.length ? Math.round(completed.length / course.lessons.length * 100) : 0;
    progressEl.innerHTML = `<div class="progress-top"><span>📈 Your learning progress</span><strong>${percent}%</strong></div>
      <div class="progress-track"><span style="width:${percent}%"></span></div>
      <small>${completed.length} of ${course.lessons.length} lessons completed</small>`;
  }

  course.lessons.forEach((lesson, index) => {
    const card = document.createElement("article"); card.className = "lesson-card";
    const badge = document.createElement("div"); badge.className = "lesson-badge"; badge.textContent = `LESSON ${String(index + 1).padStart(2, "0")}`;
    const heading = document.createElement("h2"); heading.textContent = lesson.title;
    const summary = document.createElement("p"); summary.className = "lesson-summary"; summary.textContent = lesson.content;
    const studyButton = document.createElement("button"); studyButton.className = "study-toggle"; studyButton.textContent = "📚 Start lesson";
    const body = document.createElement("div"); body.className = "study-content"; body.hidden = true;
    const detail = document.createElement("p"); detail.textContent = lesson.details;
    const exampleTitle = document.createElement("h3"); exampleTitle.textContent = "💡 Example";
    const example = document.createElement("pre"); example.className = "lesson-example"; example.textContent = lesson.examples;
    const practiceTitle = document.createElement("h3"); practiceTitle.textContent = "✍️ Practice";
    const practice = document.createElement("p"); practice.textContent = lesson.practice;
    const answer = document.createElement("textarea"); answer.rows = 3; answer.placeholder = "Write your practice answer here...";
    const answerKey = storageKey + "_answer_" + index; answer.value = localStorage.getItem(answerKey) || "";
    const saveAnswer = document.createElement("button"); saveAnswer.className = "secondary-button"; saveAnswer.textContent = "💾 Save practice answer";
    const answerMessage = document.createElement("span"); answerMessage.className = "answer-message";
    saveAnswer.addEventListener("click", () => { localStorage.setItem(answerKey, answer.value); answerMessage.textContent = "Saved on this device ✓"; });

    const quizBox = document.createElement("div"); quizBox.className = "quiz-box";
    const quizTitle = document.createElement("h3"); quizTitle.textContent = "🧠 Quick quiz"; quizBox.appendChild(quizTitle);
    let score = 0, answered = 0;
    const quizScore = document.createElement("p"); quizScore.className = "quiz-score"; quizScore.textContent = "Choose an answer for each question to see your score.";
    lesson.quiz.forEach((q, qi) => {
      const item = document.createElement("div"); item.className = "quiz-question";
      const question = document.createElement("p"); question.textContent = `${qi + 1}. ${q.question}`; item.appendChild(question);
      const choices = document.createElement("div"); choices.className = "quiz-options";
      const result = document.createElement("p"); result.className = "quiz-feedback"; result.setAttribute("aria-live", "polite");
      q.options.forEach((option, oi) => {
        const choice = document.createElement("button"); choice.type = "button"; choice.className = "quiz-option"; choice.textContent = option;
        choice.addEventListener("click", () => {
          if (item.dataset.answered === "yes") return;
          item.dataset.answered = "yes"; answered++;
          choices.querySelectorAll("button").forEach((b, bi) => {
            b.disabled = true;
            if (bi === q.answer) b.classList.add("correct-option");
          });
          if (oi === q.answer) { score++; result.textContent = "✓ Correct!"; result.classList.add("correct-text"); }
          else { choice.classList.add("wrong-option"); result.textContent = "Not quite — correct answer: " + q.options[q.answer]; result.classList.add("wrong-text"); }
          if (answered === lesson.quiz.length) quizScore.textContent = `Quiz result: ${score}/${lesson.quiz.length}`;
        });
        choices.appendChild(choice);
      });
      item.append(choices, result); quizBox.appendChild(item);
    });
    quizBox.appendChild(quizScore);
    body.append(detail, exampleTitle, example, practiceTitle, practice, answer, saveAnswer, answerMessage, quizBox);
    studyButton.addEventListener("click", () => {
      body.hidden = !body.hidden;
      studyButton.textContent = body.hidden ? "📚 Start lesson" : "📖 Hide lesson";
    });

    const status = document.createElement("p"); status.className = "lesson-status";
    const completeButton = document.createElement("button"); completeButton.className = "complete-button";
    function updateButton() {
      const done = completed.includes(index);
      status.textContent = done ? "✓ Completed" : "Your next learning step";
      completeButton.textContent = done ? "Mark as not completed" : "✓ Mark lesson complete";
      completeButton.classList.toggle("is-complete", done);
    }
    completeButton.addEventListener("click", () => {
      if (completed.includes(index)) completed = completed.filter(n => n !== index);
      else completed.push(index);
      localStorage.setItem(storageKey, JSON.stringify(completed));
      updateButton(); updateProgress();
    });
    card.append(badge, heading, summary, studyButton, body, status, completeButton);
    lessonsEl.appendChild(card); updateButton();
  });
  updateProgress();
}