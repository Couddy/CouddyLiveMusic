// Menu mobile
const menuToggle = document.getElementById('menuToggle');
const mobileMenu = document.getElementById('mobileMenu');
const iconMenu = document.getElementById('iconMenu');
const iconClose = document.getElementById('iconClose');

function closeMenu(){
  mobileMenu.classList.remove('open');
  menuToggle.setAttribute('aria-expanded', 'false');
  iconMenu.classList.remove('hidden');
  iconClose.classList.add('hidden');
}
menuToggle.addEventListener('click', () => {
  const isOpen = mobileMenu.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded', String(isOpen));
  iconMenu.classList.toggle('hidden', isOpen);
  iconClose.classList.toggle('hidden', !isOpen);
});
mobileMenu.querySelectorAll('a').forEach(a => a.addEventListener('click', closeMenu));
document.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeMenu(); });

// Reveal au scroll — se rejoue à chaque passage (entrée/sortie du viewport)
const reveals = document.querySelectorAll('.reveal');
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    entry.target.classList.toggle('is-visible', entry.isIntersecting);
  });
}, { threshold: 0.12 });
reveals.forEach(el => observer.observe(el));

// Répertoire — recherche live
const repertoire = ["A La Faveur De L'automne - Tété", "A Ma Place - Axel Bauer", "Aint No Sunshine - Bill Withers", "Allo le Monde - Pauline", "American Boy - Estelle", "Amsterdam - Jacques Brel", "Angie - The Rolling Stones", "Another Brick In The Wall - Pink Floyd", "Another One Bites The Dust - Queen", "Armstrong - Claude Nougaro", "Aux Armes Citoyennes - Zazie", "Aux Sombres Héros De Lamer - Noir Désir", "Baby Can I Hold You - Tracy Chapman", "Baby I Love Your Way - Big Mountain", "Baby One More Time - Britney Spears", "Back To Black - Amy Winehouse", "Bad-Guy - Billie Eilish", "Bang Bang - Jessie J", "Beds Are Burning - Midnight Oil", "Beggin - Madcon", "Behind Blue Eyes - Limp Bizkit", "Big Jet Plane - Angus & Julia Stone", "Black Horse And The Cherry Tree - KT Tunstall", "Blue Suede Shoes - Elvis Presley", "Boulevard Of Broken Dreams - Green Day", "Californication - Red Hot Chili Peppers", "Calling You - Jevetta Steele", "Can't Help Falling In Love - Elvis Presley", "Ce Soir Tu Vas Prendre - Max Boublil", "Cendrillon - Téléphone", "Chante - Michel Fugain", "Chasing Cars - Snow Patrol", "Clint Eastwood - Gorillaz", "Come As You Are - Nirvana", "Come Back Home - Sofia Carson", "Comme Elle Vient - Noir Désir", "Crazy - Barkley", "Crazy In Love - Beyoncé", "Creep - Radiohead", "Cry To Me - Solomon Burke", "Cursed Lovers - Laetitia", "Day Is Gone - Noah Gundersen", "Diamonds - Rihanna", "Diego Libre Dans Sa Tête - Michel Berger", "Don't Look Back In Anger - Oasis", "Don't Stop Believin - Journey", "Don't You Worry Bout a Thing - Tori Kelly", "Down On My Knees - Ayo", "Dust In The Wind - Kansas", "Emmene-Moi - Boulevard des Airs", "Emmenez-Moi - Charles Aznavour", "Encore Un Matin - Jean-Jacques Goldman", "Englishman In New York - Sting", "Eteins La Lumière - Axel Bauer", "Every Breath You Take - The Police", "Everybody Hurts - R.E.M'", "Everybody Needs Somebody To Love - The Blues Brothers", "Fais-Moi Mal - Boris Vian", "Faith - Stevie Wonder , Ariana Grande", "Fallin - Alicia Keys", "Feel - Robbie Williams", "Feeling Good - Muse", "Fell Good Inc - Gorillaz", "Femme libérée - Cookie Dingle", "Fever - Peggy lee", "Fields Of Gold - Sting", "Finesse - Bruno Mars", "Fly Me To The Moon - Frank Sinatra", "Footloose - Kenny Loggins", "Freed From Desire - Gala", "Gangsta's Paradise - Coolio", "Gardien De Nuit - Francis Cabrel", "Georgia On My Mind - Ray Charles", "Get Lucky - Daft Punk", "Girl On Fire - Alicia Keys", "Hallelujah - Jeff Buckley", "Happy - Pharrell Williams", "Hey Jude - The Beatles", "Hey Ya - OutKast", "Historia De Un Amor - Chico & The Gypsies", "Hit The Road Jack - Ray Charles", "Hotel California - Eagles", "Hurt - Christina Aguilera", "Hymne à L'amour - Édith Piaf", "I Got A Woman - Ray Charles", "I Got You I Feel Good - James Brown", "I Kissed a Girl - Katy Perry", "I Love Rock'n Roll - Joan Jett", "I Need A Dollar - Aloe-Blacc", "I Still Havent Found What Im Looking For - U2", "I Wish I Was A Punk Rocker - Sandi Thom", "I Want To Break Free - Queen", "I will survive - Gloria Gaynor", "I'm So Excited - Pointer Sisters", "If I Ain't Got You - Alicia Keys", "Il Y A - Vanessa Paradis", "Im Yours - Jason Mraz", "Imagine - John Lennon", "Isn't She Lovely - Stevie Wonder", "Its Probably Me - Sting", "It's a mans mans world - James Brown", "Je Vous Trouve Un Charme Fou - Hoshi", "Je l'aime à mourir - Francis Cabrel", "Jeune Et Con - Saez", "Jimmy - Moriarty", "Jolene - Dolly Parton", "Just The Two Of Us - Bill Withers", "J'accuse - Saez", "J'ai Vu - Niagara", "J'en Rêve encore - Gerald de Palmas", "J'irai Où Tu Iras - Celine Dion", "J'veux Du Soleil - Au P'tit Bonheur", "Killing Me Softly - Fugees", "Knocking On Heavens Door - Bob Dylan", "L'aventurier - Indochine", "La Bamba - Ritchie Valens", "La Bohème - Charles Aznavour", "La Mordidita - Ricky Martin", "La Solitudine - Laura Pausini", "La Tristitude - Oldelaf", "Lady Marmalade - Christina Aguilera", "Le Chat - Pow Wow", "Le Chemin - Kyo", "Le Vent Nous Portera - Noir Désir", "Lemon Tree - Fool's Garden", "Les Copains d'Abord - Georges Brassens", "Les Démons De Minuit - Images", "Let Her Go - Passenger", "Lili - AaRON", "Lose Control - Teddy Swims", "Losing My Religion - R.E.M'", "Lost On You - LP", "Love - Frank Sinatra", "Love Is All - Roger Glover", "Léa - Louise Attaque", "L'Horloge Tourne - Mickaël Miro", "L'amour Existe Encore - Celine Dion", "L'homme Pressé - Noir Désir", "L'hymne De Nos Campagnes - Tryo", "Ma Benz Acoustic - Brigitte", "Machistador - M", "Make It Rain - Ed Sheeran", "Make You Feel My Love - Adele", "Man I Feel Like A Woman - Shania Twain", "Marcia Baila - les Rita Mitsouko", "Marry You - Bruno Mars", "Medley Chanté - I Will Survive", "Mercy - Duffy", "Mon Cœur Mon Amour - Anaïs", "Morgane De Toi - Renaud", "New Years Day - U2", "New York Avec Toi - Téléphone", "Ode To My Family - The Cranberries", "One - U2", "One More Time - Daft Punk", "One of us - Joan Osborne", "Overdose - Laetitia", "Petite Sirène - Francis Cabrel", "Proud Mary - Tina Turner", "Purple Rain - Prince", "Respect - Aretha Franklin", "Riptide - Vance Joy", "Rolling In The Deep - Adèle", "Roxanne - The police", "Roylas - Lorde", "Runaway Train - Soul Asylum", "Résiste - France Gall", "Save Tonight - Eagle-Eye Cherry", "Save Your Tears - The Weeknd & Ariana Grande", "Say It Aint So Joe - Murray Head", "Say You Wont let Go - James Arthur", "Seven Nation Army - The White Stripes", "Shallow - Lady Gaga & Bradley Cooper", "Shape Of My Heart - Sting", "Shes Like The Wind - Patrick Swayze , Wendy Fraser", "Show Must Go On - Queen", "Si Antes Te Hubiera Conocido - Karol G", "Sing For Me - Divinity 2", "Sitting On The Dock Of The Bay - Otis Redding", "Someone Like You - Adele", "Somewhere Only We Know - Keane", "Stairway To Heaven - Led Zeppelin", "Stand By Me - Ben E. King", "Stay - Rihanna", "Still Loving You - Scorpions", "Streets Of Philadelphia - Bruce Springsteen", "Sunday Bloody Sunday - U2", "Sunday With A Flu - Yodelice", "Superstition - Stevie Wonder", "Sway - Michael Bublé", "Sweet Child O Mine - Guns N'Roses", "Sweet Dreams Are Made Of This - Eurythmics", "Tainted Love - Soft Cell", "Talk To Me - Yodelice", "Talkin Bout A Revolution - Tracy Chapman", "Tears In Heaven - Eric Clapton", "The Door - Teddy Swims", "The Winner Takes It All - ABBA", "The Reason - Hoobastank", "These Boots Are Made For Walkin - Nancy Sinatra", "Think - Aretha Franklin", "Toi Et Moi - Guillaume Grand", "Tout le Monde Veut Devenir Un Cat - les Aristochats", "Toxic - Britney Spears", "Trois Nuits Par Semaine - Indochine", "Un Autre Monde - Téléphone", "Un Peu Plus Près Des Etoiles - Gold", "Un ano de amor - luz cazal", "Unchain My Heart - Joe Coker", "Unintended - Muse", "Uptown Funk - Mark Ronson", "Use Somebody - Kings of Leon", "Valerie - Amy Winehouse", "What About Us - P!nk", "Whats Up - 4 Non Blondes", "Where The Streets Have No Name - U2", "Why Don't You Do Right - Peggy lee", "Wicked Game - Chris Isaak", "Wind Of Change - Scorpions", "Wish You Were Here - Pink Floyd", "With Or Without You - U2", "Wonderwall - Oasis", "You're The First The Last My Everything - Barry White", "Your Man - Josh Turner", "Your Song - Elton John", "Zombie - Cranberries"];

const repList = document.getElementById('repList');
const repCount = document.getElementById('repCount');
const repSearch = document.getElementById('repSearch');

function escapeHtml(str){
  return str.replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
}

function renderList(items){
  if (items.length === 0){
    repList.innerHTML = '<p class="py-8 text-muted text-center">Aucun titre ne correspond à votre recherche.</p>';
  } else {
    repList.innerHTML = items.map(t => {
      const parts = t.split(' - ');
      const title = escapeHtml(parts[0]);
      const artist = escapeHtml(parts.slice(1).join(' - '));
      return `<div role="listitem" class="py-3.5 px-1 border-b border-cream/6 text-cream text-[0.98rem]">${title}${artist ? ` <span class="text-muted">— ${artist}</span>` : ''}</div>`;
    }).join('');
  }
  repCount.textContent = items.length + ' titre' + (items.length !== 1 ? 's' : '');
}

renderList(repertoire);

repSearch.addEventListener('input', (e) => {
  const q = e.target.value.trim().toLowerCase();
  const filtered = q ? repertoire.filter(t => t.toLowerCase().includes(q)) : repertoire;
  renderList(filtered);
});

// Tirage du soir — clic sur le vinyle du header
const vinylTrigger = document.getElementById('vinylTrigger');
const vinylOverlay = document.getElementById('vinylOverlay');
const vinylBackdrop = document.getElementById('vinylBackdrop');
const vinylFlip = document.getElementById('vinylFlip');
const vinylFlipDisc = document.getElementById('vinylFlipDisc');
const vinylCard = document.getElementById('vinylCard');
const vinylClose = document.getElementById('vinylClose');
const vinylSongTitle = document.getElementById('vinylSongTitle');
const vinylSongArtist = document.getElementById('vinylSongArtist');
const vinylRepertoireLink = document.getElementById('vinylRepertoireLink');
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

let vinylOpen = false;
let lastSongIndex = -1;
let vinylSeq = 0;
let vinylRafId = null;
let vinylTimeouts = [];

function clearVinylTimers(){
  if (vinylRafId !== null){ cancelAnimationFrame(vinylRafId); vinylRafId = null; }
  vinylTimeouts.forEach(id => clearTimeout(id));
  vinylTimeouts = [];
}

function pickSong(){
  let i = Math.floor(Math.random() * repertoire.length);
  if (repertoire.length > 1) {
    while (i === lastSongIndex) i = Math.floor(Math.random() * repertoire.length);
  }
  lastSongIndex = i;
  const parts = repertoire[i].split(' - ');
  vinylSongTitle.textContent = parts[0];
  vinylSongArtist.textContent = parts.slice(1).join(' - ');
}

function flipTransform(from, to){
  const scale = from.width / to.width;
  const x = (from.left + from.width / 2) - (to.left + to.width / 2);
  const y = (from.top + from.height / 2) - (to.top + to.height / 2);
  return `translate(${x}px, ${y}px) scale(${scale})`;
}

// Rotation pilotée en JS : accélère en suspense jusqu'à un pic (rapide), tient
// le suspense au moins REVEAL_DELAY avant de révéler la réponse pendant la
// décélération, puis tient une vitesse de croisière indéfiniment tant que
// l'overlay reste ouvert (évite tout à-coup de resynchronisation avec
// l'animation CSS pendant que le disque est visible).
function startVinylRotation(seq){
  const CRUISE = 360 / 16000;  // deg/ms — équivaut à la rotation CSS normale (16s/tour)
  const PEAK = 2.2;            // deg/ms au pic du suspense
  const DURATION = 3600;       // ms — durée totale de la montée/redescente
  const REVEAL_DELAY = 3000;   // ms — la réponse ne s'affiche jamais avant ce délai
  let angle = 0;
  let last = performance.now();
  const startTime = last;
  let revealed = false;

  vinylFlipDisc.classList.add('vinyl-manual');

  // La carte (avec le label "Ce soir, on vous joue peut-être…") apparaît
  // tout de suite ; seule la réponse (titre/artiste) reste masquée.
  vinylCard.style.opacity = '1';
  vinylCard.style.transform = 'scale(1)';
  vinylClose.focus();

  function step(now){
    if (seq !== vinylSeq) return;
    const elapsed = now - startTime;
    const dt = now - last;
    last = now;
    const p = Math.min(elapsed / DURATION, 1);
    const velocity = elapsed < DURATION
      ? CRUISE + (PEAK - CRUISE) * Math.sin(p * Math.PI)
      : CRUISE;
    angle += velocity * dt;
    vinylFlipDisc.style.transform = `rotate(${angle}deg)`;

    if (!revealed && elapsed >= REVEAL_DELAY){
      revealed = true;
      vinylSongTitle.style.opacity = '1';
      vinylSongArtist.style.opacity = '1';
    }

    vinylRafId = requestAnimationFrame(step);
  }
  vinylRafId = requestAnimationFrame(step);
}

function openVinylOverlay(){
  if (vinylOpen) return;
  vinylOpen = true;
  vinylSeq++;
  const seq = vinylSeq;
  clearVinylTimers();
  pickSong();
  vinylSongTitle.style.opacity = '0';
  vinylSongArtist.style.opacity = '0';

  vinylOverlay.classList.remove('hidden');
  vinylOverlay.classList.add('open');
  vinylTrigger.setAttribute('aria-expanded', 'true');

  if (prefersReducedMotion){
    vinylBackdrop.style.backgroundColor = 'rgba(5,5,5,0.85)';
    vinylCard.style.opacity = '1';
    vinylCard.style.transform = 'scale(1)';
    vinylSongTitle.style.opacity = '1';
    vinylSongArtist.style.opacity = '1';
    vinylClose.focus();
    return;
  }

  const startRect = vinylTrigger.getBoundingClientRect();
  const endRect = vinylFlip.getBoundingClientRect();

  vinylFlip.style.transition = 'none';
  vinylFlip.style.transform = flipTransform(startRect, endRect);
  vinylFlipDisc.classList.add('vinyl-fast');
  void vinylFlip.offsetWidth; // force reflow

  requestAnimationFrame(() => {
    if (seq !== vinylSeq) return;
    vinylFlip.style.transition = 'transform 650ms cubic-bezier(.16,.84,.44,1)';
    vinylFlip.style.transform = 'translate(0,0) scale(1)';
    vinylBackdrop.style.backgroundColor = 'rgba(5,5,5,0.85)';
  });

  const t1 = setTimeout(() => {
    if (seq !== vinylSeq) return;
    vinylFlipDisc.classList.remove('vinyl-fast');
    startVinylRotation(seq);
  }, 650);
  vinylTimeouts.push(t1);
}

function closeVinylOverlay(focusTrigger){
  if (!vinylOpen) return;
  if (focusTrigger === undefined) focusTrigger = true;
  vinylOpen = false;
  vinylSeq++;
  const seq = vinylSeq;
  clearVinylTimers();
  vinylTrigger.setAttribute('aria-expanded', 'false');

  vinylCard.style.opacity = '0';
  vinylCard.style.transform = 'scale(0.96)';
  vinylBackdrop.style.backgroundColor = 'rgba(5,5,5,0)';
  vinylFlipDisc.classList.remove('vinyl-manual');
  vinylFlipDisc.style.transform = '';

  if (prefersReducedMotion){
    vinylOverlay.classList.remove('open');
    vinylOverlay.classList.add('hidden');
    if (focusTrigger) vinylTrigger.focus();
    return;
  }

  const startRect = vinylTrigger.getBoundingClientRect();
  const endRect = vinylFlip.getBoundingClientRect();

  vinylFlipDisc.classList.add('vinyl-fast');
  vinylFlip.style.transition = 'transform 550ms cubic-bezier(.16,.84,.44,1)';
  vinylFlip.style.transform = flipTransform(startRect, endRect);

  const t2 = setTimeout(() => {
    if (seq !== vinylSeq) return;
    vinylOverlay.classList.remove('open');
    vinylOverlay.classList.add('hidden');
    vinylFlip.style.transition = 'none';
    vinylFlip.style.transform = 'none';
    vinylFlipDisc.classList.remove('vinyl-fast');
    if (focusTrigger) vinylTrigger.focus();
  }, 550);
  vinylTimeouts.push(t2);
}

vinylTrigger.addEventListener('click', openVinylOverlay);
vinylClose.addEventListener('click', () => closeVinylOverlay(true));
vinylBackdrop.addEventListener('click', () => closeVinylOverlay(true));
vinylRepertoireLink.addEventListener('click', () => closeVinylOverlay(false));
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && vinylOpen) closeVinylOverlay();
});

// Prestations — clic sur une catégorie = liste des dates jouées
const prestaData = {
  "Mariages": [
    { d: "15/11/2025", v: "Restaurant La Patte d'Oie — Mennecy" },
    { d: "13/09/2025", v: "Château de Courson-Monteloup" },
    { d: "10/05/2025", v: "Champigny-sur-Marne (94)" },
    { d: "31/08/2024", v: "Moulin Sainte-Agnès — Landelles (28)" }
  ],
  "Cocktails": [],
  "Restaurants": [
    { d: "12/06/2025", v: "Le Chapeau — Versailles" },
    { d: "14/03/2025", v: "Iguana — Paris" },
    { d: "15/05/2024", v: "3D Lounge — Sainte-Geneviève-des-Bois" },
    { d: "24/04/2024", v: "Little Bulles — Paris" },
    { d: "30/03/2024", v: "Iguana — Paris 17e" },
    { d: "28/11/2023", v: "Dicoeur — Paris" },
    { d: "29/09/2023", v: "Living Room — Palaiseau" },
    { d: "30/06/2023", v: "Dicoeur — Paris" },
    { d: "01/06/2023", v: "Le Chalet du Lac — Paris" },
    { d: "11/11/2022", v: "La Lanterne — Saint-Cloud" }
  ],
  "Bars": [
    { d: "05/06/2026", v: "Le Verra — Courbevoie" },
    { d: "22/05/2026", v: "Le Verra — Courbevoie" },
    { d: "01/05/2026", v: "Le Verra — Courbevoie" },
    { d: "26/03/2026", v: "Le Verra — Courbevoie" },
    { d: "06/03/2026", v: "Le Verra — Courbevoie" },
    { d: "20/02/2026", v: "Le Verra — Courbevoie" },
    { d: "23/01/2026", v: "Le Verra — Courbevoie" },
    { d: "16/11/2024", v: "T'Cup — Paris (Jukebox Live)" },
    { d: "21/06/2024", v: "Chiquito — Paris" },
    { d: "07/06/2024", v: "Chiquito — Paris" },
    { d: "31/05/2024", v: "3ienchs — Paris" },
    { d: "28/10/2022", v: "Cavern Club — Paris" },
    { d: "21/06/2022", v: "Cavern Club — Paris (Fête de la musique)" },
    { d: "13/04/2022", v: "Cavern Club — Paris" },
    { d: "08/03/2022", v: "Folie Liberté — Paris" },
    { d: "03/03/2022", v: "Fut'Rax — Paris" }
  ],
  "Anniversaires": [],
  "Entreprises": [
    { d: "28/11/2024", v: "COPROX (soirée d'entreprise) — Massy (94)" },
    { d: "18/01/2023", v: "HN Services — Paris" }
  ],
  "Club Med Live": [
    { d: "17/07/2026", v: "Marbella (Espagne)" },
    { d: "15/07/2026", v: "Marbella (Espagne)" },
    { d: "14/07/2026", v: "Marbella (Espagne)" },
    { d: "13/07/2026", v: "Marbella (Espagne)" },
    { d: "25/07/2025", v: "Marrakech (Maroc)" },
    { d: "23/07/2025", v: "Marrakech (Maroc)" },
    { d: "22/07/2025", v: "Marrakech (Maroc)" },
    { d: "21/07/2025", v: "Marrakech (Maroc)" },
    { d: "01/03/2025", v: "Val d'Isère" },
    { d: "28/02/2025", v: "Val d'Isère" },
    { d: "27/02/2025", v: "Val d'Isère" },
    { d: "26/02/2025", v: "Val d'Isère" },
    { d: "25/02/2025", v: "Val d'Isère" },
    { d: "24/02/2025", v: "Val d'Isère" },
    { d: "20/09/2024", v: "Palmiye — Antalya (Turquie)" },
    { d: "18/09/2024", v: "Palmiye — Antalya (Turquie)" },
    { d: "17/09/2024", v: "Palmiye — Antalya (Turquie)" },
    { d: "16/09/2024", v: "Palmiye — Antalya (Turquie)" },
    { d: "19/07/2024", v: "Les Arcs Panorama (73)" },
    { d: "18/07/2024", v: "Les Arcs Panorama (73)" },
    { d: "17/07/2024", v: "Les Arcs Panorama (73)" },
    { d: "16/07/2024", v: "Les Arcs Panorama (73)" },
    { d: "15/07/2024", v: "Les Arcs Panorama (73)" },
    { d: "14/07/2024", v: "Les Arcs Panorama (73)" },
    { d: "12/07/2024", v: "Peisey-Vallandry (73)" },
    { d: "11/07/2024", v: "Peisey-Vallandry (73)" },
    { d: "10/07/2024", v: "Peisey-Vallandry (73)" },
    { d: "09/07/2024", v: "Peisey-Vallandry (73)" },
    { d: "07/07/2024", v: "Peisey-Vallandry (73)" }
  ],
  "Autres": [
    { d: "21/11/2025", v: "Gaîté Montparnasse — Paris" },
    { d: "15/10/2025", v: "Mairie de Guyancourt" },
    { d: "12/09/2025", v: "Mairie d'Épinay-sur-Orge" },
    { d: "21/06/2025", v: "Fête de la musique — Précy-sur-Marne" },
    { d: "20/06/2025", v: "Hôtel Ibis Cambronne Tour Eiffel — Paris" },
    { d: "05/04/2025", v: "Mairie de Paris" },
    { d: "30/03/2025", v: "Grande Course RATP — Stade de France" },
    { d: "31/12/2024", v: "Hôtel M'Social — Paris" },
    { d: "21/12/2024", v: "Marché de Noël communal — Paris" },
    { d: "16/11/2024", v: "Gymnase Biodiversité, semi-marathon — Boulogne-Billancourt (78)" },
    { d: "24/08/2024", v: "La Croix du Vieux Pont — Berny-Rivière (02)" },
    { d: "17/08/2024", v: "Mairie de Sceaux (92)" },
    { d: "10/08/2024", v: "La Croix du Vieux Pont — Berny-Rivière (02)" },
    { d: "22/06/2024", v: "Fête de la musique — Saint-Brice-sous-Forêt" },
    { d: "01/06/2024", v: "Camping du Vieux Pont — Berny-Rivière" },
    { d: "25/05/2024", v: "Camping du Vieux Pont — Berny-Rivière" },
    { d: "27/04/2024", v: "Camping du Vieux Pont — Berny-Rivière" },
    { d: "20/04/2024", v: "Salle de concert Le SUB — Vitry-sur-Seine" },
    { d: "17/03/2024", v: "Espace Louise Michel — Fresnes" },
    { d: "18/10/2023", v: "Hôtel Mercure — Paris" },
    { d: "21/06/2023", v: "Fête de la musique (Liomar) — Levallois-Perret" },
    { d: "20/09/2022", v: "Péniche Henjo — Paris" }
  ]
};

const prestaTriggers = document.querySelectorAll('.presta-trigger');
const prestaPanel = document.getElementById('prestaPanel');
const prestaPanelTitle = document.getElementById('prestaPanelTitle');
const prestaPanelList = document.getElementById('prestaPanelList');
const prestaPanelClose = document.getElementById('prestaPanelClose');
let prestaActiveCat = null;

function renderPresta(cat){
  const items = prestaData[cat] || [];
  prestaPanelTitle.textContent = cat + ' — ' + items.length + (items.length > 1 ? ' dates jouées' : ' date jouée');
  if (items.length === 0){
    prestaPanelList.innerHTML = '<li class="text-muted py-2 sm:col-span-2">Pas encore de date enregistrée pour cette catégorie. </li>';
  } else {
    prestaPanelList.innerHTML = items.map(it =>
      `<li class="flex items-baseline gap-3 py-2.5 border-b border-cream/10 text-sm">
        <span class="font-mono text-gold/60 shrink-0">${it.d}</span>
        <span class="text-cream">${it.v}</span>
      </li>`
    ).join('');
  }
}

function openPresta(cat, btn){
  prestaActiveCat = cat;
  renderPresta(cat);
  prestaPanel.classList.remove('hidden');
  prestaTriggers.forEach(b => b.setAttribute('aria-expanded', String(b === btn)));
  prestaPanel.scrollIntoView({ block: 'nearest' });
}

function closePresta(){
  prestaActiveCat = null;
  prestaPanel.classList.add('hidden');
  prestaTriggers.forEach(b => b.setAttribute('aria-expanded', 'false'));
}

prestaTriggers.forEach(btn => {
  btn.addEventListener('click', () => {
    const cat = btn.dataset.cat;
    if (prestaActiveCat === cat && !prestaPanel.classList.contains('hidden')){
      closePresta();
    } else {
      openPresta(cat, btn);
    }
  });
});

prestaPanelClose.addEventListener('click', closePresta);
