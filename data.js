// ── Macro ratios per diet ──────────────────────────────────────
function macroPcts(diet) {
  const m = {
    Balanced:      { c: 0.50, p: 0.25, f: 0.25 },
    Keto:          { c: 0.05, p: 0.30, f: 0.65 },
    Mediterranean: { c: 0.45, p: 0.20, f: 0.35 },
    Paleo:         { c: 0.30, p: 0.35, f: 0.35 },
    Vegan:         { c: 0.60, p: 0.20, f: 0.20 },
    Vegetarian:    { c: 0.55, p: 0.20, f: 0.25 },
  };
  return m[diet] || m['Balanced'];
}

// ── Meal database ─────────────────────────────────────────────
const MEAL_DB = {
  Balanced: {
    Breakfast: [
      { name:'Oats & Berry Bowl', desc:'Rolled oats with mixed berries, banana, and a drizzle of honey.', calories:380, carbs:68, protein:12, fat:8, ingredients:['Rolled oats 80g','Mixed berries 100g','Banana 1','Honey 1 tsp','Almond milk 200ml'] },
      { name:'Avocado Toast + Eggs', desc:'Sourdough toast with smashed avocado, two poached eggs, chilli flakes.', calories:420, carbs:38, protein:20, fat:22, ingredients:['Sourdough bread 2 slices','Avocado 1','Eggs 2','Chilli flakes pinch','Lemon juice 1 tsp'] },
      { name:'Greek Yoghurt Parfait', desc:'Thick Greek yoghurt layered with granola and fresh fruit.', calories:360, carbs:50, protein:18, fat:9, ingredients:['Greek yoghurt 200g','Granola 50g','Strawberries 80g','Blueberries 50g','Maple syrup 1 tsp'] },
    ],
    Lunch: [
      { name:'Grilled Chicken Wrap', desc:'Grilled chicken breast, lettuce, tomato, cucumber, tzatziki in a whole-wheat wrap.', calories:520, carbs:48, protein:38, fat:14, ingredients:['Chicken breast 150g','Whole-wheat wrap 1','Lettuce 30g','Tomato 1','Cucumber 50g','Tzatziki 2 tbsp'] },
      { name:'Quinoa Power Bowl', desc:'Quinoa with roasted veggies, chickpeas, feta, and lemon-herb dressing.', calories:490, carbs:62, protein:22, fat:16, ingredients:['Quinoa 90g','Chickpeas 100g','Bell pepper 1','Zucchini 1','Feta cheese 30g','Olive oil 1 tbsp','Lemon juice 1 tbsp'] },
      { name:'Turkey & Veggie Sub', desc:'Wholegrain sub filled with lean turkey, spinach, roasted peppers, mustard.', calories:500, carbs:52, protein:34, fat:13, ingredients:['Wholegrain sub roll 1','Turkey slices 120g','Spinach 20g','Roasted peppers 50g','Mustard 1 tsp'] },
    ],
    Dinner: [
      { name:'Baked Salmon & Greens', desc:'Lemon-herb baked salmon with steamed broccoli and brown rice.', calories:580, carbs:50, protein:42, fat:18, ingredients:['Salmon fillet 200g','Brown rice 80g','Broccoli 150g','Olive oil 1 tbsp','Lemon 1','Garlic 2 cloves','Fresh herbs bunch'] },
      { name:'Chicken Stir-fry', desc:'Lean chicken with colorful veggies in a light soy-ginger sauce over rice.', calories:560, carbs:58, protein:40, fat:12, ingredients:['Chicken breast 180g','Mixed vegetables 200g','Jasmine rice 80g','Soy sauce 2 tbsp','Ginger 1 tsp','Sesame oil 1 tsp'] },
      { name:'Beef & Veggie Bowl', desc:'Lean ground beef with roasted sweet potato, spinach, and a tahini drizzle.', calories:600, carbs:54, protein:38, fat:20, ingredients:['Lean ground beef 150g','Sweet potato 200g','Spinach 80g','Tahini 1 tbsp','Garlic 2 cloves'] },
    ],
    Snack: [
      { name:'Apple & Peanut Butter', desc:'Crisp apple slices with natural peanut butter.', calories:220, carbs:28, protein:7, fat:10, ingredients:['Apple 1','Peanut butter 2 tbsp'] },
      { name:'Trail Mix', desc:'Mixed nuts, seeds, and a handful of dark chocolate chips.', calories:260, carbs:22, protein:8, fat:16, ingredients:['Almonds 20g','Cashews 20g','Pumpkin seeds 15g','Dark chocolate chips 15g'] },
      { name:'Hummus & Veggies', desc:'Creamy hummus with carrot sticks, celery, and cucumber.', calories:180, carbs:20, protein:6, fat:9, ingredients:['Hummus 80g','Carrots 60g','Celery 2 sticks','Cucumber 50g'] },
    ],
  },

  Keto: {
    Breakfast: [
      { name:'Bacon & Egg Cups', desc:'Crispy bacon-lined cups filled with baked eggs and melted cheddar.', calories:400, carbs:2, protein:28, fat:32, ingredients:['Bacon rashers 4','Eggs 3','Cheddar cheese 40g','Butter 1 tsp','Black pepper pinch'] },
      { name:'Keto Avocado Smoothie', desc:'Creamy avocado blended with coconut milk, spinach, and MCT oil.', calories:370, carbs:7, protein:6, fat:36, ingredients:['Avocado 1','Coconut milk 200ml','Spinach 30g','MCT oil 1 tbsp','Ice cubes'] },
      { name:'Smoked Salmon Omelette', desc:'Fluffy omelette filled with smoked salmon, cream cheese, and dill.', calories:420, carbs:2, protein:32, fat:31, ingredients:['Eggs 3','Smoked salmon 80g','Cream cheese 30g','Dill fresh','Butter 1 tsp'] },
    ],
    Lunch: [
      { name:'Cobb Salad', desc:'Romaine, grilled chicken, avocado, bacon, boiled egg, blue cheese dressing.', calories:540, carbs:8, protein:42, fat:38, ingredients:['Romaine lettuce 80g','Chicken breast 150g','Avocado 1','Bacon 2 rashers','Egg 1','Blue cheese dressing 2 tbsp'] },
      { name:'Zucchini Noodle Bolognese', desc:'Spiralized zucchini with rich meat sauce and Parmesan.', calories:500, carbs:10, protein:36, fat:34, ingredients:['Zucchini 2 large','Ground beef 150g','Tomato passata 100g','Parmesan 30g','Olive oil 1 tbsp','Garlic 2 cloves'] },
      { name:'Tuna Lettuce Wraps', desc:'Tuna mayo with diced celery wrapped in crisp butter lettuce leaves.', calories:460, carbs:5, protein:40, fat:30, ingredients:['Tuna in oil 180g','Butter lettuce 4 leaves','Mayonnaise 2 tbsp','Celery 1 stalk','Lemon juice 1 tsp'] },
    ],
    Dinner: [
      { name:'Pan-seared Ribeye', desc:'Grass-fed ribeye with garlic butter, asparagus, and creamed spinach.', calories:700, carbs:5, protein:50, fat:52, ingredients:['Ribeye steak 250g','Asparagus 150g','Spinach 100g','Butter 2 tbsp','Garlic 3 cloves','Heavy cream 50ml'] },
      { name:'Baked Chicken Thighs', desc:'Crispy-skin chicken thighs with roasted cauliflower and herb butter.', calories:620, carbs:6, protein:44, fat:46, ingredients:['Chicken thighs 250g','Cauliflower 200g','Butter 2 tbsp','Thyme 2 sprigs','Garlic 2 cloves'] },
      { name:'Prawn & Avocado Salad', desc:'Grilled prawns over avocado, cucumber, lime dressing.', calories:480, carbs:7, protein:38, fat:32, ingredients:['Prawns 200g','Avocado 1','Cucumber 1','Lime juice 2 tbsp','Olive oil 1 tbsp','Coriander bunch'] },
    ],
    Snack: [
      { name:'Cheese & Salami', desc:'Aged cheddar cubes with sliced salami.', calories:260, carbs:1, protein:14, fat:22, ingredients:['Cheddar cheese 50g','Salami slices 50g'] },
      { name:'Macadamia Nuts', desc:'Handful of raw macadamia nuts — the highest fat keto nut.', calories:250, carbs:4, protein:3, fat:26, ingredients:['Macadamia nuts 40g'] },
    ],
  },

  Mediterranean: {
    Breakfast: [
      { name:'Shakshuka', desc:'Eggs poached in spiced tomato-pepper sauce with warm pitta.', calories:380, carbs:36, protein:20, fat:16, ingredients:['Eggs 2','Tomatoes 2 large','Bell pepper 1','Onion 1','Cumin 1 tsp','Paprika 1 tsp','Olive oil 1 tbsp','Pitta 1'] },
      { name:'Greek Yoghurt & Honey', desc:'Thick strained yoghurt with walnuts, honey, and figs.', calories:340, carbs:38, protein:16, fat:14, ingredients:['Greek yoghurt 200g','Walnuts 20g','Honey 1 tbsp','Fresh figs 2'] },
      { name:'Olive Oil Toast', desc:'Crusty sourdough with extra-virgin olive oil, tomato, and oregano.', calories:320, carbs:44, protein:8, fat:14, ingredients:['Sourdough 2 slices','Olive oil 2 tbsp','Tomato 1','Dried oregano 1 tsp','Sea salt pinch'] },
    ],
    Lunch: [
      { name:'Greek Salad & Falafel', desc:'Classic Greek salad with crispy falafel and hummus.', calories:510, carbs:52, protein:18, fat:28, ingredients:['Falafel 6 pieces','Cucumber 1','Tomatoes 2','Kalamata olives 30g','Feta 50g','Red onion 1/2','Olive oil 1 tbsp'] },
      { name:'Mezze Plate', desc:'Hummus, tabbouleh, stuffed vine leaves, and warm flatbread.', calories:480, carbs:58, protein:14, fat:22, ingredients:['Hummus 100g','Tabbouleh 80g','Vine leaves 4','Flatbread 1','Lemon 1'] },
      { name:'Grilled Fish Salad', desc:'Pan-grilled sea bass over arugula with capers, lemon, olive oil.', calories:460, carbs:8, protein:40, fat:28, ingredients:['Sea bass fillet 180g','Arugula 60g','Capers 1 tbsp','Lemon 1','Olive oil 2 tbsp','Cherry tomatoes 80g'] },
    ],
    Dinner: [
      { name:'Lamb Kofta & Couscous', desc:'Spiced lamb kofta with herbed couscous and cucumber-mint yoghurt.', calories:620, carbs:52, protein:38, fat:26, ingredients:['Ground lamb 200g','Couscous 80g','Greek yoghurt 80g','Cucumber 1/2','Mint fresh','Cumin 1 tsp','Coriander 1 tsp'] },
      { name:'Seafood Pasta', desc:'Linguine with prawns, clams, cherry tomatoes, white wine, parsley.', calories:580, carbs:64, protein:34, fat:16, ingredients:['Linguine 100g','Prawns 120g','Clams 100g','Cherry tomatoes 100g','White wine 50ml','Olive oil 2 tbsp','Parsley bunch'] },
      { name:'Baked Sea Bream', desc:'Whole sea bream roasted with olives, lemon, fennel, and capers.', calories:500, carbs:10, protein:44, fat:30, ingredients:['Sea bream 350g','Fennel 1 bulb','Kalamata olives 40g','Lemon 1','Capers 1 tbsp','Olive oil 2 tbsp'] },
    ],
    Snack: [
      { name:'Dates & Almonds', desc:'Medjool dates stuffed with whole almonds.', calories:230, carbs:34, protein:5, fat:9, ingredients:['Medjool dates 3','Almonds 15g'] },
      { name:'Pitta & Tzatziki', desc:'Toasted mini pitta with thick tzatziki dip.', calories:200, carbs:26, protein:7, fat:7, ingredients:['Mini pitta 1','Tzatziki 80g'] },
    ],
  },

  Paleo: {
    Breakfast: [
      { name:'Sweet Potato Hash', desc:'Diced sweet potato sautéed with bell peppers, onion, and fried eggs.', calories:420, carbs:46, protein:18, fat:18, ingredients:['Sweet potato 200g','Bell pepper 1','Onion 1','Eggs 2','Coconut oil 1 tbsp','Paprika 1 tsp'] },
      { name:'Almond Flour Pancakes', desc:'Fluffy grain-free pancakes with fresh berries and pure maple syrup.', calories:390, carbs:30, protein:14, fat:26, ingredients:['Almond flour 80g','Eggs 2','Coconut milk 50ml','Mixed berries 80g','Maple syrup 1 tbsp','Coconut oil 1 tsp'] },
      { name:'Smoked Salmon Plate', desc:'Wild smoked salmon with avocado, cucumber, lemon, and capers.', calories:380, carbs:8, protein:30, fat:26, ingredients:['Smoked salmon 120g','Avocado 1','Cucumber 80g','Capers 1 tbsp','Lemon 1','Red onion 1/4'] },
    ],
    Lunch: [
      { name:'Beef & Veggie Lettuce Wraps', desc:'Seasoned ground beef with tomato salsa in crisp lettuce cups.', calories:500, carbs:20, protein:36, fat:30, ingredients:['Ground beef 180g','Butter lettuce 4 leaves','Tomato 2','Onion 1/2','Lime juice 1 tbsp','Coriander bunch','Avocado 1'] },
      { name:'Chicken & Roasted Veg', desc:'Herb-roasted chicken thighs with seasonal roasted vegetables.', calories:520, carbs:28, protein:40, fat:26, ingredients:['Chicken thighs 200g','Parsnip 1','Carrot 2','Red onion 1','Courgette 1','Olive oil 2 tbsp','Rosemary 2 sprigs'] },
      { name:'Tuna Niçoise', desc:'Wild tuna, boiled egg, olives, green beans, tomato — no dressing needed.', calories:460, carbs:18, protein:42, fat:24, ingredients:['Tuna steaks 180g','Eggs 2','Green beans 100g','Cherry tomatoes 80g','Kalamata olives 30g','Olive oil 1 tbsp'] },
    ],
    Dinner: [
      { name:'Grilled Lamb Chops', desc:'Herb-marinated lamb chops with roasted asparagus and cauliflower mash.', calories:660, carbs:18, protein:48, fat:44, ingredients:['Lamb chops 250g','Asparagus 150g','Cauliflower 300g','Coconut milk 50ml','Garlic 3 cloves','Rosemary 2 sprigs'] },
      { name:'Bison Burger (Bunless)', desc:'Grass-fed bison patty with avocado, tomato, onion — lettuce bun.', calories:580, carbs:12, protein:44, fat:38, ingredients:['Bison mince 200g','Butter lettuce 2 leaves','Avocado 1','Tomato 1','Red onion rings','Mustard 1 tsp'] },
      { name:'Coconut Curry Chicken', desc:'Tender chicken in a light coconut-turmeric curry with cauliflower rice.', calories:600, carbs:20, protein:44, fat:36, ingredients:['Chicken breast 200g','Coconut milk 200ml','Cauliflower 300g','Turmeric 1 tsp','Ginger 1 tsp','Garlic 2 cloves','Coriander bunch'] },
    ],
    Snack: [
      { name:'Beef Jerky', desc:'High-protein, no-additive grass-fed beef jerky.', calories:160, carbs:4, protein:22, fat:6, ingredients:['Beef jerky 40g'] },
      { name:'Coconut Bites', desc:'Date and coconut bliss balls — naturally sweet and satisfying.', calories:220, carbs:26, protein:4, fat:12, ingredients:['Medjool dates 3','Desiccated coconut 30g','Almond flour 20g'] },
    ],
  },

  Vegan: {
    Breakfast: [
      { name:'Chia Pudding', desc:'Overnight chia pudding with oat milk, mango, and toasted coconut.', calories:360, carbs:52, protein:10, fat:14, ingredients:['Chia seeds 40g','Oat milk 250ml','Mango 100g','Desiccated coconut 15g','Maple syrup 1 tsp'] },
      { name:'Tofu Scramble', desc:'Turmeric-spiced crumbled tofu with spinach, peppers, and toast.', calories:400, carbs:40, protein:22, fat:16, ingredients:['Firm tofu 200g','Spinach 60g','Bell pepper 1','Turmeric 1 tsp','Sourdough 2 slices','Olive oil 1 tbsp'] },
      { name:'Banana Oat Pancakes', desc:'Two-ingredient banana-oat pancakes with blueberry compote.', calories:380, carbs:70, protein:10, fat:6, ingredients:['Bananas 2','Rolled oats 80g','Blueberries 100g','Maple syrup 1 tbsp','Plant-based milk 50ml'] },
    ],
    Lunch: [
      { name:'Buddha Bowl', desc:'Brown rice, edamame, roasted chickpeas, avocado, tahini dressing.', calories:560, carbs:72, protein:22, fat:22, ingredients:['Brown rice 90g','Edamame 80g','Chickpeas 100g','Avocado 1','Tahini 1 tbsp','Lemon juice 1 tbsp','Soy sauce 1 tbsp'] },
      { name:'Lentil Soup', desc:'Hearty red lentil and vegetable soup with crusty bread.', calories:480, carbs:70, protein:24, fat:8, ingredients:['Red lentils 120g','Carrot 2','Onion 1','Tomatoes 2','Cumin 1 tsp','Turmeric 1 tsp','Olive oil 1 tbsp','Sourdough 1 slice'] },
      { name:'Jackfruit Tacos', desc:'Pulled jackfruit in chipotle sauce, black beans, slaw, lime.', calories:500, carbs:76, protein:16, fat:14, ingredients:['Jackfruit 200g','Black beans 100g','Corn tortillas 2','Chipotle paste 1 tbsp','Cabbage slaw 80g','Lime 1','Coriander bunch'] },
    ],
    Dinner: [
      { name:'Thai Tofu Curry', desc:'Crispy tofu in fragrant green curry with jasmine rice and broccolini.', calories:580, carbs:68, protein:24, fat:22, ingredients:['Firm tofu 200g','Coconut milk 200ml','Green curry paste 2 tbsp','Jasmine rice 90g','Broccolini 100g','Lime 1','Coriander bunch'] },
      { name:'Mushroom Risotto', desc:'Creamy arborio risotto with mixed mushrooms, white wine, and thyme.', calories:560, carbs:82, protein:16, fat:16, ingredients:['Arborio rice 100g','Mixed mushrooms 200g','White wine 50ml','Vegetable stock 600ml','Nutritional yeast 2 tbsp','Olive oil 2 tbsp','Thyme fresh'] },
      { name:'Black Bean Burgers', desc:'Smoky black bean patties with sweet potato fries and guacamole.', calories:600, carbs:84, protein:20, fat:18, ingredients:['Black beans 200g','Oats 40g','Sweet potato 200g','Avocado 1','Lime 1','Smoked paprika 1 tsp','Burger bun 1'] },
    ],
    Snack: [
      { name:'Rice Cakes & Almond Butter', desc:'Puffed rice cakes with creamy almond butter.', calories:200, carbs:24, protein:6, fat:10, ingredients:['Rice cakes 2','Almond butter 2 tbsp'] },
      { name:'Edamame', desc:'Steamed edamame pods with a pinch of sea salt.', calories:160, carbs:14, protein:14, fat:6, ingredients:['Edamame 150g','Sea salt pinch'] },
    ],
  },

  Vegetarian: {
    Breakfast: [
      { name:'Masala Omelette', desc:'Spiced vegetable omelette with onion, tomato, green chilli, and coriander.', calories:360, carbs:16, protein:22, fat:24, ingredients:['Eggs 3','Onion 1/2','Tomato 1','Green chilli 1','Coriander bunch','Turmeric pinch','Oil 1 tsp'] },
      { name:'Overnight Oats', desc:'Oats soaked in milk with chia, banana, and a swirl of peanut butter.', calories:410, carbs:62, protein:16, fat:12, ingredients:['Rolled oats 80g','Milk 200ml','Chia seeds 1 tbsp','Banana 1','Peanut butter 1 tbsp','Honey 1 tsp'] },
      { name:'Smoothie Bowl', desc:'Acai-berry blend topped with granola, coconut, and kiwi.', calories:390, carbs:60, protein:10, fat:12, ingredients:['Frozen acai 100g','Frozen berries 100g','Banana 1','Granola 40g','Kiwi 1','Coconut flakes 10g'] },
    ],
    Lunch: [
      { name:'Caprese Panini', desc:'Toasted panini with fresh mozzarella, tomato, basil, and balsamic glaze.', calories:500, carbs:48, protein:22, fat:24, ingredients:['Ciabatta roll 1','Mozzarella 80g','Tomatoes 2','Basil leaves','Balsamic glaze 1 tbsp','Olive oil 1 tbsp'] },
      { name:'Dhal & Rice', desc:'Comforting red lentil dhal with basmati rice and pickled onion.', calories:520, carbs:80, protein:22, fat:10, ingredients:['Red lentils 120g','Basmati rice 80g','Tomatoes 2','Onion 1','Ginger 1 tsp','Cumin 1 tsp','Turmeric 1 tsp','Ghee 1 tbsp'] },
      { name:'Paneer Wrap', desc:'Pan-fried paneer tikka with mint chutney in a whole-wheat wrap.', calories:540, carbs:50, protein:26, fat:26, ingredients:['Paneer 150g','Whole-wheat wrap 1','Mint chutney 2 tbsp','Red onion 1/2','Tomato 1','Lettuce 20g','Tikka spice mix 1 tsp'] },
    ],
    Dinner: [
      { name:'Paneer Butter Masala', desc:'Rich, creamy tomato-based curry with paneer, served with naan.', calories:640, carbs:56, protein:28, fat:34, ingredients:['Paneer 200g','Tomatoes 3','Cream 50ml','Butter 2 tbsp','Garlic 3 cloves','Ginger 1 tsp','Garam masala 1 tsp','Naan 1'] },
      { name:'Mushroom & Spinach Pasta', desc:'Sautéed mushrooms and wilted spinach in garlic cream sauce.', calories:580, carbs:70, protein:20, fat:24, ingredients:['Pasta 100g','Mixed mushrooms 200g','Spinach 80g','Cream 60ml','Garlic 3 cloves','Parmesan 30g','Olive oil 1 tbsp'] },
      { name:'Vegetable Biryani', desc:'Fragrant basmati rice layered with spiced mixed vegetables and raita.', calories:600, carbs:84, protein:16, fat:20, ingredients:['Basmati rice 100g','Mixed vegetables 200g','Raita 100g','Saffron pinch','Biryani spice mix 2 tsp','Ghee 2 tbsp','Fried onion 30g'] },
    ],
    Snack: [
      { name:'Paneer Cubes', desc:'Pan-fried paneer cubes with chaat masala.', calories:220, carbs:4, protein:16, fat:16, ingredients:['Paneer 80g','Chaat masala 1 tsp','Oil 1 tsp'] },
      { name:'Fruit & Nut Mix', desc:'Seasonal fresh fruit with a handful of cashews and raisins.', calories:210, carbs:32, protein:5, fat:8, ingredients:['Seasonal fruit 150g','Cashews 20g','Raisins 15g'] },
    ],
  },
};

const MEAL_TYPES_BY_COUNT = {
  2: ['Breakfast', 'Dinner'],
  3: ['Breakfast', 'Lunch', 'Dinner'],
  4: ['Breakfast', 'Lunch', 'Dinner', 'Snack'],
  5: ['Breakfast', 'Snack', 'Lunch', 'Snack', 'Dinner'],
};

function pick(arr) { return arr[Math.floor(Math.random() * arr.length)]; }

function generatePlan(diet, totalCal, mealCount) {
  const db = MEAL_DB[diet] || MEAL_DB['Balanced'];
  const types = MEAL_TYPES_BY_COUNT[mealCount] || MEAL_TYPES_BY_COUNT[3];
  const snackUsed = [];
  return types.map(type => {
    const pool = db[type] || db['Snack'] || [];
    let meal = pick(pool);
    // avoid duplicate snacks
    if (type === 'Snack') {
      const unused = pool.filter(m => !snackUsed.includes(m.name));
      meal = pick(unused.length ? unused : pool);
      snackUsed.push(meal.name);
    }
    return { ...meal, type };
  });
}

// ── localStorage helpers ───────────────────────────────────────
function savePlan(meals, meta) {
  try {
    localStorage.setItem('np_current_plan', JSON.stringify({ meals, meta, date: new Date().toISOString() }));
  } catch(e) {}
}

function loadPlan() {
  try {
    const raw = localStorage.getItem('np_current_plan');
    return raw ? JSON.parse(raw) : null;
  } catch(e) { return null; }
}

function saveWeeklyPlan(data) {
  try { localStorage.setItem('np_weekly', JSON.stringify(data)); } catch(e) {}
}

function loadWeeklyPlan() {
  try { const r = localStorage.getItem('np_weekly'); return r ? JSON.parse(r) : null; } catch(e) { return null; }
}

function saveFavourites(list) {
  try { localStorage.setItem('np_favourites', JSON.stringify(list)); } catch(e) {}
}

function loadFavourites() {
  try { const r = localStorage.getItem('np_favourites'); return r ? JSON.parse(r) : []; } catch(e) { return []; }
}

// ── Nav renderer ──────────────────────────────────────────────
const NAV_ITEMS = [
  { label: '🍽 Meal Planner', href: 'index.html' },
  { label: '📅 Weekly View', href: 'weekly.html' },
  { label: '🛒 Grocery List', href: 'grocery.html' },
  { label: '🔥 Calorie Calc', href: 'calculator.html' },
  { label: '❤️ Favourites', href: 'favourites.html' },
  { label: '🖨 Print', href: 'print.html' },
];

function renderNav(activePage) {
  const el = document.getElementById('nav-links');
  if (!el) return;
  el.innerHTML = NAV_ITEMS.map(n =>
    `<a href="${n.href}" class="${n.href === activePage ? 'active' : ''}">${n.label}</a>`
  ).join('');
}