// Plant Database
const plantDatabase = [
    {
        id: "monstera",
        name: "Monstera Deliciosa",
        scientificName: "Monstera deliciosa",
        category: "Indoor",
        image: "assets/monstera.png",
        light: "Bright Indirect Light",
        water: "Every 1-2 Weeks",
        humidity: "High (60%+)",
        shortDesc: "Famous for its iconic leaf splits (fenestrations) and dramatic growth, this tropical beauty is the ultimate statement plant.",
        overview: "The Monstera Deliciosa is a species of flowering plant native to tropical rainforests of southern Mexico, south to Panama. It has been introduced to many tropical areas and is very commonly grown indoors as a houseplant due to its easy care and striking architectural leaves.",
        biologicalDesc: "Monsteras are epiphytic climbers, meaning they use aerial roots to scale tall jungle canopies in search of sunlight. Their unique leaf splits (fenestrations) serve a biological purpose: they allow heavy tropical rainfall and winds to pass through the leaves without tearing the plant. Additionally, this structure allows light to filter through to the lower leaves growing closer to the forest floor.",
        propagationDesc: "Monstera propagation is simple using stem cuttings. Locate a healthy node (the brown bump where aerial roots or leaves grow) and cut about an inch below it. Place the cutting in clean water. Keep it in bright, indirect light, and in 3-4 weeks, you will see roots emerge. Once roots are 2-3 inches long, pot it in a well-draining soil mix."
    },
    {
        id: "snake_plant",
        name: "Snake Plant",
        scientificName: "Sansevieria trifasciata",
        category: "Indoor",
        image: "assets/snake_plant.png",
        light: "Low to Bright Direct",
        water: "Every 2-3 Weeks",
        humidity: "Low to Medium",
        shortDesc: "An exceptionally hardy plant with striking upright sword-like leaves that are famous for purifying indoor air.",
        overview: "Sansevieria trifasciata is a species of flowering plant in the family Asparagaceae, native to tropical West Africa. It is commonly known as the snake plant, mother-in-law's tongue, or viper's bowstring hemp. It is an evergreen perennial plant forming dense stands, spreading by way of its creeping rhizome.",
        biologicalDesc: "Snake plants utilize Crassulacean Acid Metabolism (CAM) photosynthesis. Unlike most plants, CAM plants open their stomata at night to absorb carbon dioxide and minimize water loss through evaporation during hot jungle days. This makes them highly efficient oxygen producers and excellent bedroom companions as they continue releasing oxygen overnight.",
        propagationDesc: "Snake plants can be propagated easily by leaf cuttings or division. For leaf cuttings, cut a healthy leaf into 3-4 inch segments (making sure to keep track of which end was facing down). Place the bottom end in water or well-draining soil. Alternatively, divide the underground rhizomes using a clean knife during repotting."
    },
    {
        id: "succulent",
        name: "Echeveria Succulent",
        scientificName: "Echeveria elegans",
        category: "Succulent",
        image: "assets/succulent.png",
        light: "Bright Direct Sun",
        water: "Every 2-3 Weeks",
        humidity: "Low (Dry air)",
        shortDesc: "A stunning rosette-forming succulent with powdery blue-green leaves that blush pink when exposed to bright sun.",
        overview: "Echeveria is a large genus of flowering plants in the stonecrop family Crassulaceae, native to semi-desert areas of Central America. Many species produce gorgeous clusters of bell-shaped flowers on tall stalks during the summer. They are highly prized for their architectural geometric rosettes.",
        biologicalDesc: "Echeverias have adapted to dry, sunny environments by storing water in their thick, fleshy leaves. The powdery coating on their leaves, known as epicuticular wax or farina, acts as a natural sunscreen that protects them from intense UV rays and helps water run off the leaves to prevent rot.",
        propagationDesc: "Echeverias propagate effortlessly from individual leaves. Gently wiggle a leaf off the stem, ensuring a clean break. Let the leaf callous dry for 2-3 days, then lay it on damp succulent soil in bright indirect light. In a few weeks, tiny pink roots and a miniature rosette clone will sprout from the leaf base."
    },
    {
        id: "orchid",
        name: "Phalaenopsis Orchid",
        scientificName: "Phalaenopsis amabilis",
        category: "Orchid",
        image: "assets/orchid.png",
        light: "Medium Indirect",
        water: "Every 1-2 Weeks",
        humidity: "High (50%+)",
        shortDesc: "Known for its long-lasting, elegant butterfly-like blooms, this orchid adds a touch of tropical luxury to any room.",
        overview: "Phalaenopsis is a genus of about seventy species of plants in the family Orchidaceae. Orchids of this genus are monopodial epiphytes or lithophytes with fleshy leaves and long-lasting, colorful flowers. They are native to humid tropical forests, growing on tree bark.",
        biologicalDesc: "In the wild, Phalaenopsis orchids do not grow in soil; they are epiphytes that cling to tree bark high in the canopy. Their roots are covered in a silvery spongy substance called velamen, which absorbs water, nutrients, and moisture directly from the tropical air. These roots also contain chlorophyll and participate in photosynthesis!",
        propagationDesc: "Orchids propagate naturally through 'keikis'—baby plantlets that grow on the flower spikes. Once a keiki develops 2-3 roots that are at least two inches long, you can gently cut it off the parent spike and pot it in orchid bark or sphagnum moss. Keep humidity high and mist the roots frequently to help it establish."
    }
];

// Fun Jungle Facts Array
const jungleFacts = [
    "Did you know that Monstera leaves develop splits and holes—called fenestrations—to allow heavy tropical winds and monsoon rains to pass through without tearing the leaves?",
    "Epiphytes, like orchids, grow on trees to reach sunlight in the dense canopy, but they aren't parasites—they absorb water and nutrients purely from air, rain, and debris.",
    "Jungle soils are surprisingly nutrient-poor! Almost all nutrients in a tropical rainforest are stored inside the living plants and decaying leaf litter, not the dirt.",
    "Some jungle plants have developed 'drip tips'—long pointed leaf ends that allow heavy rain to run off quickly. This prevents moss and algae from growing and blocking sunlight.",
    "Rainforests are so dense that it can take 10 minutes for a raindrop to travel from the high canopy to the forest floor!"
];

// App State
let currentFilter = "all";
let searchQuery = "";
let currentQuizStep = 1;
const quizAnswers = {};
let schedules = [];

// DOM Elements
const plantGridContainer = document.getElementById("plant-grid-container");
const searchInput = document.getElementById("search-input");
const filterButtons = document.querySelectorAll(".tab-btn");
const factBox = document.getElementById("fact-box");
const detailsModal = document.getElementById("plant-details-modal");
const closeModalBtn = document.getElementById("close-modal-btn");
const schedPlantSelect = document.getElementById("sched-plant-select");
const addScheduleForm = document.getElementById("add-schedule-form");
const schedulerItemsContainer = document.getElementById("scheduler-items-container");
const emptyScheduleMsg = document.getElementById("empty-schedule-msg");

// Quiz Elements
const quizForm = document.getElementById("plant-quiz-form");
const quizSteps = document.querySelectorAll(".quiz-step");
const quizPrevBtn = document.getElementById("quiz-prev-btn");
const quizNextBtn = document.getElementById("quiz-next-btn");
const quizResultContainer = document.getElementById("quiz-result-container");
const resultText = document.getElementById("result-text");
const resultPlantCardHolder = document.getElementById("result-plant-card-holder");
const quizRestartBtn = document.getElementById("quiz-restart-btn");

// Initialize application
document.addEventListener("DOMContentLoaded", () => {
    renderPlantGrid();
    setupFactTicker();
    setupSelectOptions();
    loadSchedules();
    setupQuiz();
    setupNavigationScrolls();
});

// Setup Smooth Scroll Navigation
function setupNavigationScrolls() {
    const navLinks = document.querySelectorAll("nav a, footer .footer-links a");
    navLinks.forEach(link => {
        link.addEventListener("click", (e) => {
            const targetId = link.getAttribute("href");
            if (targetId.startsWith("#")) {
                e.preventDefault();
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    // Update active nav link
                    document.querySelectorAll("nav a").forEach(l => l.classList.remove("active"));
                    const navMatch = document.querySelector(`nav a[href="${targetId}"]`);
                    if (navMatch) navMatch.classList.add("active");
                    
                    targetElement.scrollIntoView({ behavior: "smooth", block: "start" });
                }
            }
        });
    });
}

// Render the catalog grid
function renderPlantGrid() {
    plantGridContainer.innerHTML = "";
    
    const filteredPlants = plantDatabase.filter(plant => {
        const matchesFilter = currentFilter === "all" || plant.category === currentFilter;
        const matchesSearch = plant.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                              plant.scientificName.toLowerCase().includes(searchQuery.toLowerCase()) ||
                              plant.overview.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesFilter && matchesSearch;
    });

    if (filteredPlants.length === 0) {
        plantGridContainer.innerHTML = `
            <div style="grid-column: 1/-1; text-align: center; padding: 3rem; color: var(--text-muted);">
                <span style="font-size: 3rem;">🔍</span>
                <p style="margin-top: 1rem; font-size: 1.2rem;">No flora matches your search query. Try another keyword!</p>
            </div>
        `;
        return;
    }

    filteredPlants.forEach(plant => {
        const card = document.createElement("div");
        card.className = "plant-card";
        card.innerHTML = `
            <div class="plant-img-wrapper">
                <img src="${plant.image}" alt="${plant.name}">
                <span class="plant-tag">${plant.category}</span>
            </div>
            <div class="plant-info">
                <h3>${plant.name}</h3>
                <p class="plant-sci">${plant.scientificName}</p>
                <p class="plant-desc">${plant.shortDesc}</p>
                <div class="plant-meta">
                    <div class="meta-item">
                        <span class="meta-label">Sunlight</span>
                        <span class="meta-val">${plant.light.split(" ")[0]}</span>
                    </div>
                    <div class="meta-item">
                        <span class="meta-label">Water</span>
                        <span class="meta-val">${plant.water.split(" ")[1] || plant.water.split(" ")[0]}</span>
                    </div>
                </div>
            </div>
        `;
        card.addEventListener("click", () => openPlantDetails(plant));
        plantGridContainer.appendChild(card);
    });
}

// Search and Filter Listeners
searchInput.addEventListener("input", (e) => {
    searchQuery = e.target.value;
    renderPlantGrid();
});

filterButtons.forEach(btn => {
    btn.addEventListener("click", () => {
        filterButtons.forEach(b => b.classList.remove("active"));
        btn.classList.add("active");
        currentFilter = btn.dataset.filter;
        renderPlantGrid();
    });
});

// Fact Ticker Functionality
function setupFactTicker() {
    let factIdx = 0;
    setInterval(() => {
        factIdx = (factIdx + 1) % jungleFacts.length;
        factBox.style.opacity = 0;
        setTimeout(() => {
            factBox.textContent = `"${jungleFacts[factIdx]}"`;
            factBox.style.opacity = 1;
        }, 500);
    }, 8000);
}

// Details Modal Functionality
function openPlantDetails(plant) {
    document.getElementById("modal-hero-wrapper").innerHTML = `<img src="${plant.image}" alt="${plant.name}">`;
    document.getElementById("modal-title").textContent = plant.name;
    document.getElementById("modal-sci-name").textContent = plant.scientificName;
    document.getElementById("modal-overview-desc").textContent = plant.overview;
    document.getElementById("modal-stat-light").textContent = plant.light;
    document.getElementById("modal-stat-water").textContent = plant.water;
    document.getElementById("modal-stat-humidity").textContent = plant.humidity;
    document.getElementById("modal-bio-desc").textContent = plant.biologicalDesc;
    document.getElementById("modal-prop-desc").textContent = plant.propagationDesc;
    
    detailsModal.classList.add("active");
    document.body.style.overflow = "hidden"; // disable scroll
}

function closeModal() {
    detailsModal.classList.remove("active");
    document.body.style.overflow = ""; // restore scroll
}

closeModalBtn.addEventListener("click", closeModal);
detailsModal.addEventListener("click", (e) => {
    if (e.target === detailsModal) closeModal();
});
document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && detailsModal.classList.contains("active")) {
        closeModal();
    }
});

// Setup Select Options inside Care Scheduler Form
function setupSelectOptions() {
    schedPlantSelect.innerHTML = '<option value="" disabled selected>Choose a plant...</option>';
    plantDatabase.forEach(plant => {
        const opt = document.createElement("option");
        opt.value = plant.id;
        opt.textContent = plant.name;
        schedPlantSelect.appendChild(opt);
    });
}

// Scheduler Functionality
function loadSchedules() {
    const saved = localStorage.getItem("verdant_schedules");
    if (saved) {
        try {
            schedules = JSON.parse(saved);
        } catch (e) {
            schedules = [];
        }
    }
    renderSchedulerList();
}

function saveSchedules() {
    localStorage.setItem("verdant_schedules", JSON.stringify(schedules));
    renderSchedulerList();
}

function renderSchedulerList() {
    // Clear dynamic list
    const items = document.querySelectorAll(".schedule-item");
    items.forEach(item => item.remove());
    
    if (schedules.length === 0) {
        emptyScheduleMsg.style.display = "block";
        return;
    }
    
    emptyScheduleMsg.style.display = "none";
    
    schedules.forEach((sched, index) => {
        const plant = plantDatabase.find(p => p.id === sched.plantId);
        if (!plant) return;
        
        const nextDate = new Date(sched.nextWatering);
        const diffTime = nextDate - new Date();
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
        
        let dueText = "";
        if (diffDays < 0) {
            dueText = `⚠️ Overdue by ${Math.abs(diffDays)} day(s)!`;
        } else if (diffDays === 0) {
            dueText = "💧 Due Today!";
        } else {
            dueText = `⏳ In ${diffDays} day(s)`;
        }
        
        const item = document.createElement("div");
        item.className = "schedule-item";
        item.innerHTML = `
            <div class="schedule-item-info">
                <h4>${sched.nickname} <span style="font-size: 0.85rem; font-weight: normal; color: var(--primary);">(${plant.name})</span></h4>
                <p>Water every ${sched.interval} days | <strong style="color: ${diffDays <= 0 ? 'var(--accent-pink)' : 'var(--accent-yellow)'};">${dueText}</strong></p>
            </div>
            <div class="schedule-item-actions">
                <button class="btn-icon" onclick="waterPlant(${index})" title="Mark as Watered">💧</button>
                <button class="btn-icon" onclick="deleteSchedule(${index})" title="Remove Plant">✕</button>
            </div>
        `;
        schedulerItemsContainer.appendChild(item);
    });
}

// Global functions for scheduler actions
window.waterPlant = function(index) {
    const sched = schedules[index];
    const newNextWatering = new Date();
    newNextWatering.setDate(newNextWatering.getDate() + parseInt(sched.interval));
    sched.nextWatering = newNextWatering.toISOString();
    saveSchedules();
};

window.deleteSchedule = function(index) {
    schedules.splice(index, 1);
    saveSchedules();
};

addScheduleForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const plantId = schedPlantSelect.value;
    const nickname = document.getElementById("sched-plant-nickname").value.trim();
    const interval = parseInt(document.getElementById("sched-interval").value);
    
    if (!plantId) return;
    
    const nextWatering = new Date();
    nextWatering.setDate(nextWatering.getDate() + interval);
    
    schedules.push({
        plantId,
        nickname,
        interval,
        nextWatering: nextWatering.toISOString()
    });
    
    saveSchedules();
    addScheduleForm.reset();
    setupSelectOptions();
});

// Quiz Functionality
function setupQuiz() {
    const optionCards = document.querySelectorAll(".option-card");
    
    optionCards.forEach(card => {
        card.addEventListener("click", () => {
            // Find parent step and siblings
            const stepEl = card.closest(".quiz-step");
            stepEl.querySelectorAll(".option-card").forEach(c => c.classList.remove("selected"));
            card.classList.add("selected");
            
            // Record answer
            const stepNum = stepEl.dataset.step;
            quizAnswers[stepNum] = card.dataset.val;
            
            // Enable next step transition or result
            enableNextButton();
        });
    });
    
    quizNextBtn.addEventListener("click", () => {
        if (currentQuizStep < 3) {
            goToStep(currentQuizStep + 1);
        } else {
            showQuizResult();
        }
    });
    
    quizPrevBtn.addEventListener("click", () => {
        if (currentQuizStep > 1) {
            goToStep(currentQuizStep - 1);
        }
    });
    
    quizRestartBtn.addEventListener("click", () => {
        currentQuizStep = 1;
        quizForm.style.display = "block";
        quizResultContainer.style.display = "none";
        quizForm.reset();
        document.querySelectorAll(".option-card").forEach(c => c.classList.remove("selected"));
        goToStep(1);
    });
}

function goToStep(stepNum) {
    quizSteps.forEach(step => {
        step.classList.remove("active");
        if (parseInt(step.dataset.step) === stepNum) {
            step.classList.add("active");
        }
    });
    currentQuizStep = stepNum;
    
    // Manage navigation visibility
    quizPrevBtn.style.visibility = stepNum > 1 ? "visible" : "hidden";
    
    if (stepNum === 3) {
        quizNextBtn.textContent = "Reveal Match 🌴";
    } else {
        quizNextBtn.textContent = "Next Question";
    }
    
    enableNextButton();
}

function enableNextButton() {
    // If current step is answered, enable button, otherwise keep it disabled
    if (quizAnswers[currentQuizStep]) {
        quizNextBtn.disabled = false;
        quizNextBtn.style.opacity = 1;
    } else {
        quizNextBtn.disabled = true;
        quizNextBtn.style.opacity = 0.5;
    }
}

function showQuizResult() {
    quizForm.style.display = "none";
    
    // Quiz logic matching algorithms:
    // Q1 Light: low, high
    // Q2 Water: neglect, regular
    // Q3 Size: small, large
    
    let matchedPlant = null;
    
    const lightVal = quizAnswers["1"];
    const waterVal = quizAnswers["2"];
    const sizeVal = quizAnswers["3"];
    
    if (lightVal === "low") {
        if (waterVal === "neglect") {
            matchedPlant = plantDatabase.find(p => p.id === "snake_plant");
        } else {
            matchedPlant = plantDatabase.find(p => p.id === "monstera");
        }
    } else { // bright light
        if (waterVal === "neglect") {
            matchedPlant = plantDatabase.find(p => p.id === "succulent");
        } else {
            matchedPlant = plantDatabase.find(p => p.id === "orchid");
        }
    }
    
    // Fallback if not found
    if (!matchedPlant) matchedPlant = plantDatabase[0];
    
    resultText.innerHTML = `Based on your bright/space requirements, the ultimate tropical match for you is the **${matchedPlant.name}**! Here is a summary of how it fits:`;
    
    resultPlantCardHolder.innerHTML = `
        <div class="plant-card" style="width: 100%; cursor: pointer;">
            <div class="plant-img-wrapper">
                <img src="${matchedPlant.image}" alt="${matchedPlant.name}">
                <span class="plant-tag">${matchedPlant.category}</span>
            </div>
            <div class="plant-info">
                <h3>${matchedPlant.name}</h3>
                <p class="plant-sci">${matchedPlant.scientificName}</p>
                <p class="plant-desc">${matchedPlant.shortDesc}</p>
            </div>
        </div>
    `;
    
    // Add event listener to open details modal on result card click
    resultPlantCardHolder.querySelector(".plant-card").addEventListener("click", () => {
        openPlantDetails(matchedPlant);
    });
    
    quizResultContainer.style.display = "block";
}
