(function () {
  'use strict';

  // ────────────────────────────────────────────────────────────────
  // 1. FAQ DATA
  //    Edit questions / answers here.
  //    Keys match locale codes resolved by detectLocale().
  // ────────────────────────────────────────────────────────────────

  var APPS = [
    {
      key:     'en',
      appName: 'ASL Bloom',
      flag:    '🇺🇸',
      lang:    'en',
      heading: 'Frequently Asked Questions',
      subtitle:'Everything you need to know about ASL Bloom.',
      ctaText: 'Still have questions?',
      ctaDesc: 'Our team is happy to help.',
      ctaLabel:'Contact Support',
      faqs: [
        { q: 'How do I get started with ASL Bloom?',
          a: 'Download the app from the App Store or Google Play, create a free account, and follow the interactive onboarding to begin your ASL journey.' },
        { q: 'Is ASL Bloom suitable for complete beginners?',
          a: 'Absolutely. Our beginner path covers the ASL alphabet, numbers 1–100, and over 200 essential everyday signs — no prior knowledge needed.' },
        { q: 'Can I use ASL Bloom without an internet connection?',
          a: 'Yes. Tap the download icon on any lesson to save it for offline use. Downloaded lessons stay available until you choose to remove them.' },
        { q: 'How do I track my learning progress?',
          a: 'Progress is saved automatically to your account. Visit the Progress tab to view your daily streaks, completed lessons, XP points, and earned badges.' },
        { q: 'What subscription plans are available?',
          a: 'We offer a free tier with limited lessons, a monthly plan, and an annual plan at a discounted rate. Compare plans in the app under Settings → Subscription.' },
        { q: 'How do I cancel my subscription?',
          a: 'Open your App Store or Google Play account settings, navigate to Subscriptions, and cancel ASL Bloom. You retain access until the end of your billing period.' }
      ]
    },
    {
      key:     'fr',
      appName: 'Pause LSF',
      flag:    '🇫🇷',
      lang:    'fr',
      heading: 'Questions fréquentes',
      subtitle:'Tout ce que vous devez savoir sur Pause LSF.',
      ctaText: 'Vous avez encore des questions ?',
      ctaDesc: 'Notre équipe est là pour vous aider.',
      ctaLabel:'Contacter le support',
      faqs: [
        { q: 'Comment commencer avec Pause LSF ?',
          a: 'Téléchargez l\'application depuis l\'App Store ou Google Play, créez un compte gratuit et suivez le tutoriel interactif pour débuter votre apprentissage de la LSF.' },
        { q: 'Pause LSF convient-il aux grands débutants ?',
          a: 'Tout à fait. Notre parcours débutant couvre l\'alphabet LSF, les chiffres de 1 à 100 et plus de 200 signes essentiels du quotidien.' },
        { q: 'Puis-je utiliser Pause LSF sans connexion internet ?',
          a: 'Oui. Appuyez sur l\'icône de téléchargement sur n\'importe quelle leçon pour la sauvegarder hors ligne. Les leçons restent disponibles jusqu\'à ce que vous les supprimiez.' },
        { q: 'Comment suivre ma progression ?',
          a: 'Votre progression est sauvegardée automatiquement. Consultez l\'onglet Progression pour voir vos séries, leçons terminées, points XP et badges obtenus.' },
        { q: 'Quels abonnements sont disponibles ?',
          a: 'Nous proposons un niveau gratuit avec des leçons limitées, un abonnement mensuel et un abonnement annuel à tarif réduit. Comparez les offres dans Paramètres → Abonnement.' },
        { q: 'Comment annuler mon abonnement ?',
          a: 'Accédez aux paramètres de votre compte App Store ou Google Play, rendez-vous dans Abonnements, puis annulez Pause LSF. Vous conservez l\'accès jusqu\'à la fin de la période en cours.' }
      ]
    },
    {
      key:     'en-gb',
      appName: 'Bright BSL',
      flag:    '🇬🇧',
      lang:    'en',
      heading: 'Frequently Asked Questions',
      subtitle:'Everything you need to know about Bright BSL.',
      ctaText: 'Still have questions?',
      ctaDesc: 'Our team is happy to help.',
      ctaLabel:'Contact Support',
      faqs: [
        { q: 'How do I get started with Bright BSL?',
          a: 'Download the app from the App Store or Google Play, create a free account, and follow the onboarding guide to begin learning BSL.' },
        { q: 'Is Bright BSL suitable for complete beginners?',
          a: 'Yes. Our beginner path covers the BSL two-handed fingerspelling alphabet, numbers 1–100, and over 200 everyday signs.' },
        { q: 'Can I use Bright BSL offline?',
          a: 'Downloaded lessons are fully available offline. Tap the download icon on any lesson to save it to your device.' },
        { q: 'How do I track my progress?',
          a: 'Progress is saved automatically. Visit the Progress tab to view your streaks, completed lessons, XP, and skill badges.' },
        { q: 'What subscription plans are available?',
          a: 'We offer a free tier, a monthly plan, and an annual plan at a discounted rate. Compare plans under Settings → Subscription in the app.' },
        { q: 'How do I cancel my subscription?',
          a: 'Go to your App Store or Google Play account settings, find Subscriptions, and cancel Bright BSL. Access continues until the billing period ends.' }
      ]
    },
    {
      key:     'en-au',
      appName: 'Auslan Wiz',
      flag:    '🇦🇺',
      lang:    'en',
      heading: 'Frequently Asked Questions',
      subtitle:'Everything you need to know about Auslan Wiz.',
      ctaText: 'Still have questions?',
      ctaDesc: 'Our team is happy to help.',
      ctaLabel:'Contact Support',
      faqs: [
        { q: 'How do I get started with Auslan Wiz?',
          a: 'Download the app from the App Store or Google Play, create a free account, and follow the onboarding guide to start learning Auslan.' },
        { q: 'Is Auslan Wiz suitable for complete beginners?',
          a: 'Absolutely. Our beginner path covers the Auslan fingerspelling alphabet, numbers, and over 200 common everyday signs.' },
        { q: 'Can I use Auslan Wiz without an internet connection?',
          a: 'Yes. Tap the download icon on any lesson to save it for offline use. Downloaded content stays available until removed.' },
        { q: 'How do I track my progress?',
          a: 'Your progress is saved automatically. Check the Progress tab for your daily streaks, completed lessons, XP, and badges.' },
        { q: 'What subscription plans are available?',
          a: 'We offer a free tier, a monthly plan, and a discounted annual plan. Compare options under Settings → Subscription in the app.' },
        { q: 'How do I cancel my subscription?',
          a: 'Manage your subscription via your App Store or Google Play account settings. Access continues until the end of your billing period.' }
      ]
    },
    {
      key:     'pt-br',
      appName: 'LibrasLab',
      flag:    '🇧🇷',
      lang:    'pt',
      heading: 'Perguntas frequentes',
      subtitle:'Tudo o que você precisa saber sobre o LibrasLab.',
      ctaText: 'Ainda tem dúvidas?',
      ctaDesc: 'Nossa equipe está aqui para ajudar.',
      ctaLabel:'Falar com o suporte',
      faqs: [
        { q: 'Como começar a usar o LibrasLab?',
          a: 'Baixe o aplicativo na App Store ou Google Play, crie uma conta gratuita e siga o tutorial interativo para começar a aprender Libras.' },
        { q: 'O LibrasLab é adequado para iniciantes?',
          a: 'Sim! Nossa trilha para iniciantes cobre o alfabeto datilológico, números de 1 a 100 e mais de 200 sinais do cotidiano.' },
        { q: 'Posso usar o LibrasLab sem internet?',
          a: 'Sim. Toque no ícone de download em qualquer aula para salvá-la e usá-la offline. O conteúdo baixado fica disponível até você removê-lo.' },
        { q: 'Como acompanho meu progresso?',
          a: 'Seu progresso é salvo automaticamente. Acesse a aba Progresso para ver suas sequências diárias, aulas concluídas, XP e medalhas.' },
        { q: 'Quais planos de assinatura estão disponíveis?',
          a: 'Oferecemos um nível gratuito, um plano mensal e um plano anual com desconto. Compare os planos em Configurações → Assinatura no aplicativo.' },
        { q: 'Como cancelo minha assinatura?',
          a: 'Acesse as configurações da sua conta na App Store ou Google Play, vá em Assinaturas e cancele o LibrasLab. O acesso continua até o fim do período atual.' }
      ]
    },
    {
      key:     'it',
      appName: 'MeLISegno',
      flag:    '🇮🇹',
      lang:    'it',
      heading: 'Domande frequenti',
      subtitle:'Tutto quello che devi sapere su MeLISegno.',
      ctaText: 'Hai ancora domande?',
      ctaDesc: 'Il nostro team è qui per aiutarti.',
      ctaLabel:'Contatta il supporto',
      faqs: [
        { q: 'Come iniziare con MeLISegno?',
          a: 'Scarica l\'app dall\'App Store o da Google Play, crea un account gratuito e segui il tutorial interattivo per iniziare ad imparare la LIS.' },
        { q: 'MeLISegno è adatto ai principianti assoluti?',
          a: 'Assolutamente sì. Il nostro percorso per principianti copre l\'alfabeto LIS, i numeri da 1 a 100 e oltre 200 segni quotidiani essenziali.' },
        { q: 'Posso usare MeLISegno senza connessione internet?',
          a: 'Sì. Tocca l\'icona di download su qualsiasi lezione per salvarla per l\'uso offline. I contenuti scaricati rimangono disponibili finché non li rimuovi.' },
        { q: 'Come monitoro i miei progressi?',
          a: 'I progressi vengono salvati automaticamente. Visita la scheda Progressi per vedere le serie giornaliere, le lezioni completate, i punti XP e i badge.' },
        { q: 'Quali piani di abbonamento sono disponibili?',
          a: 'Offriamo un livello gratuito, un piano mensile e un piano annuale scontato. Confronta le opzioni in Impostazioni → Abbonamento nell\'app.' },
        { q: 'Come annullo il mio abbonamento?',
          a: 'Accedi alle impostazioni del tuo account sull\'App Store o Google Play, vai in Abbonamenti e annulla MeLISegno. L\'accesso continua fino alla fine del periodo corrente.' }
      ]
    },
    {
      key:     'de',
      appName: 'yoDGS',
      flag:    '🇩🇪',
      lang:    'de',
      heading: 'Häufig gestellte Fragen',
      subtitle:'Alles, was du über yoDGS wissen musst.',
      ctaText: 'Noch Fragen?',
      ctaDesc: 'Unser Team hilft dir gern weiter.',
      ctaLabel:'Support kontaktieren',
      faqs: [
        { q: 'Wie starte ich mit yoDGS?',
          a: 'Lade die App aus dem App Store oder Google Play herunter, erstelle ein kostenloses Konto und folge dem interaktiven Einführungstutorial, um mit DGS zu beginnen.' },
        { q: 'Ist yoDGS für absolute Anfänger geeignet?',
          a: 'Ja! Unser Anfängerpfad umfasst das DGS-Fingeralphabet, Zahlen von 1 bis 100 und über 200 wichtige Alltagsgebärden.' },
        { q: 'Kann ich yoDGS ohne Internetverbindung nutzen?',
          a: 'Ja. Tippe auf das Download-Symbol bei einer Lektion, um sie offline zu speichern. Heruntergeladene Inhalte bleiben verfügbar, bis du sie entfernst.' },
        { q: 'Wie verfolge ich meinen Fortschritt?',
          a: 'Dein Fortschritt wird automatisch gespeichert. Besuche den Fortschritts-Tab für deine Tagesserien, abgeschlossene Lektionen, XP-Punkte und Abzeichen.' },
        { q: 'Welche Abonnementpläne gibt es?',
          a: 'Wir bieten eine kostenlose Stufe, einen Monatsplan und einen rabattierten Jahresplan. Vergleiche die Optionen in der App unter Einstellungen → Abonnement.' },
        { q: 'Wie kündige ich mein Abonnement?',
          a: 'Öffne deine App Store- oder Google Play-Kontoeinstellungen, gehe zu Abonnements und kündige yoDGS. Der Zugang bleibt bis zum Ende des Abrechnungszeitraums bestehen.' }
      ]
    },
    {
      key:     'no',
      appName: 'Toleio',
      flag:    '🇳🇴',
      lang:    'no',
      heading: 'Ofte stilte spørsmål',
      subtitle:'Alt du trenger å vite om Toleio.',
      ctaText: 'Har du fortsatt spørsmål?',
      ctaDesc: 'Teamet vårt er her for å hjelpe deg.',
      ctaLabel:'Kontakt support',
      faqs: [
        { q: 'Hvordan kommer jeg i gang med Toleio?',
          a: 'Last ned appen fra App Store eller Google Play, opprett en gratis konto og følg den interaktive introduksjonsveiledningen for å starte NTS-læringsreisen din.' },
        { q: 'Er Toleio egnet for absolutte nybegynnere?',
          a: 'Ja! Nybegynnerstien vår dekker NTS-fingerstavelesalfabetet, tall fra 1 til 100 og over 200 viktige hverdagstegn.' },
        { q: 'Kan jeg bruke Toleio uten internettforbindelse?',
          a: 'Ja. Trykk på nedlastingsikonet på en leksjon for å lagre den for offline bruk. Nedlastet innhold forblir tilgjengelig til du fjerner det.' },
        { q: 'Hvordan følger jeg fremgangen min?',
          a: 'Fremgangen din lagres automatisk. Besøk Fremgang-fanen for å se daglige rekker, fullførte leksjoner, XP-poeng og merker.' },
        { q: 'Hvilke abonnementsplaner er tilgjengelige?',
          a: 'Vi tilbyr et gratis nivå, en månedlig plan og en rabattert årsplan. Sammenlign alternativene under Innstillinger → Abonnement i appen.' },
        { q: 'Hvordan avbestiller jeg abonnementet mitt?',
          a: 'Åpne kontoinnstillingene i App Store eller Google Play, gå til Abonnementer og avbestill Toleio. Tilgangen fortsetter til slutten av gjeldende betalingsperiode.' }
      ]
    }
  ];

  // ────────────────────────────────────────────────────────────────
  // 2. LOCALE → APP KEY MAP
  // ────────────────────────────────────────────────────────────────

  var LOCALE_MAP = {
    'en': 'en', 'en-us': 'en',
    'fr': 'fr', 'fr-fr': 'fr',
    'en-gb': 'en-gb',
    'en-au': 'en-au',
    'pt-br': 'pt-br', 'pt': 'pt-br',
    'it': 'it', 'it-it': 'it',
    'de': 'de', 'de-de': 'de', 'deu': 'de',
    'no': 'no', 'nb': 'no', 'nn': 'no', 'nb-no': 'no', 'nn-no': 'no'
  };

  // ────────────────────────────────────────────────────────────────
  // 3. LOCALE DETECTION
  //    Checks (in priority order):
  //    1. window.HCLocale  — injected by document_head.hbs via {{locale}}
  //    2. HelpCenter JS API
  //    3. <html lang> attribute
  //    4. /hc/<locale>/ in URL
  //    5. Browser language
  // ────────────────────────────────────────────────────────────────

  function detectLocale() {
    if (window.HCLocale) return window.HCLocale.toLowerCase();
    if (typeof HelpCenter !== 'undefined' && HelpCenter.account && HelpCenter.account.locale) {
      return HelpCenter.account.locale.toLowerCase();
    }
    var lang = document.documentElement.lang;
    if (lang) return lang.toLowerCase();
    var m = location.pathname.match(/\/hc\/([a-z]{2}(?:-[a-z]{2})?)\//i);
    if (m) return m[1].toLowerCase();
    return (navigator.language || 'en').toLowerCase();
  }

  function resolveApp(locale) {
    var key = LOCALE_MAP[locale] || LOCALE_MAP[locale.split('-')[0]] || 'en';
    return APPS.find(function (a) { return a.key === key; }) || APPS[0];
  }

  // ────────────────────────────────────────────────────────────────
  // 4. HELPERS
  // ────────────────────────────────────────────────────────────────

  function esc(str) {
    return String(str)
      .replace(/&/g,'&amp;').replace(/</g,'&lt;')
      .replace(/>/g,'&gt;').replace(/"/g,'&quot;');
  }

  // ────────────────────────────────────────────────────────────────
  // 5. RENDER FAQ CONTENT
  // ────────────────────────────────────────────────────────────────

  function renderApp(app) {
    document.documentElement.lang = app.lang;

    var heroName = document.getElementById('hero-app-name');
    var heroSub  = document.getElementById('hero-sub');
    var breadApp = document.getElementById('breadcrumb-app');

    if (heroName) heroName.textContent = app.appName;
    if (heroSub)  heroSub.textContent  = app.subtitle;
    if (breadApp) breadApp.textContent = app.appName + ' FAQ';

    document.querySelectorAll('.app-switcher__btn').forEach(function (btn) {
      btn.classList.toggle('is-active', btn.dataset.key === app.key);
    });

    var main = document.getElementById('faq-main');
    if (!main) return;

    var items = app.faqs.map(function (faq, i) {
      return (
        '<li class="faq-item" id="faq-item-' + i + '">' +
          '<button class="faq-item__trigger" aria-expanded="false" aria-controls="faq-body-' + i + '" id="faq-q-' + i + '">' +
            '<span class="faq-item__num" aria-hidden="true">' + (i + 1) + '</span>' +
            '<span class="faq-item__question">' + esc(faq.q) + '</span>' +
            '<span class="faq-item__chevron" aria-hidden="true">' +
              '<svg viewBox="0 0 16 16" fill="none" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">' +
                '<polyline points="3 6 8 11 13 6"/>' +
              '</svg>' +
            '</span>' +
          '</button>' +
          '<div class="faq-item__body" role="region" id="faq-body-' + i + '" aria-labelledby="faq-q-' + i + '">' +
            '<div class="faq-item__body-clip">' +
              '<p class="faq-item__answer">' + esc(faq.a) + '</p>' +
            '</div>' +
          '</div>' +
        '</li>'
      );
    }).join('');

    main.innerHTML = (
      '<div class="faq-main__content">' +
        '<header class="faq-main__header">' +
          '<div class="faq-main__app-badge">' + esc(app.appName) + '</div>' +
          '<h2 class="faq-main__title">' + esc(app.heading) + '</h2>' +
          '<p class="faq-main__sub">' + esc(app.subtitle) + '</p>' +
        '</header>' +
        '<ul class="faq-list" role="list">' + items + '</ul>' +
        '<div class="faq-cta">' +
          '<div class="faq-cta__icon">' +
            '<svg viewBox="0 0 24 24" fill="none" stroke="#43BB96" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' +
              '<path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/>' +
            '</svg>' +
          '</div>' +
          '<div class="faq-cta__copy">' +
            '<p class="faq-cta__title">' + esc(app.ctaText) + '</p>' +
            '<p class="faq-cta__desc">' + esc(app.ctaDesc) + '</p>' +
          '</div>' +
          '<button class="faq-cta__btn">' +
            esc(app.ctaLabel) +
            '<svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true">' +
              '<path d="M3 8h10M9 4l4 4-4 4" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>' +
            '</svg>' +
          '</button>' +
        '</div>' +
      '</div>'
    );

    initAccordion(main);
  }

  // ────────────────────────────────────────────────────────────────
  // 6. ACCORDION
  // ────────────────────────────────────────────────────────────────

  function initAccordion(container) {
    container.querySelectorAll('.faq-item__trigger').forEach(function (trigger) {
      trigger.addEventListener('click', function () {
        var item   = this.closest('.faq-item');
        var isOpen = item.classList.contains('is-open');

        container.querySelectorAll('.faq-item').forEach(function (el) {
          el.classList.remove('is-open');
          el.querySelector('.faq-item__trigger').setAttribute('aria-expanded', 'false');
        });

        if (!isOpen) {
          item.classList.add('is-open');
          this.setAttribute('aria-expanded', 'true');
        }
      });
    });
  }

  // ────────────────────────────────────────────────────────────────
  // 7. SIDEBAR SWITCHER
  // ────────────────────────────────────────────────────────────────

  function buildSidebar() {
    var list = document.getElementById('app-switcher');
    if (!list) return;

    list.innerHTML = APPS.map(function (app) {
      return (
        '<li>' +
          '<button class="app-switcher__btn" data-key="' + esc(app.key) + '" aria-label="View ' + esc(app.appName) + ' FAQ">' +
            '<span class="app-switcher__flag" aria-hidden="true">' + app.flag + '</span>' +
            '<span class="app-switcher__dot" aria-hidden="true"></span>' +
            esc(app.appName) +
          '</button>' +
        '</li>'
      );
    }).join('');

    list.querySelectorAll('.app-switcher__btn').forEach(function (btn) {
      btn.addEventListener('click', function () {
        var app = APPS.find(function (a) { return a.key === btn.dataset.key; });
        if (app) {
          renderApp(app);
          if (window.innerWidth < 900) {
            var faqMain = document.getElementById('faq-main');
            if (faqMain) faqMain.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }
        }
      });
    });
  }

  // ────────────────────────────────────────────────────────────────
  // 8. SEARCH FILTER (home page inline search)
  // ────────────────────────────────────────────────────────────────

  function initSearch() {
    var input = document.querySelector('.hero__search-input');
    if (!input) return;

    input.addEventListener('input', function () {
      var term = this.value.trim().toLowerCase();
      if (!term) {
        document.querySelectorAll('.faq-item').forEach(function (el) {
          el.style.display = '';
        });
        return;
      }
      document.querySelectorAll('.faq-item').forEach(function (el) {
        var q = el.querySelector('.faq-item__question');
        var a = el.querySelector('.faq-item__answer');
        var match = (q && q.textContent.toLowerCase().includes(term)) ||
                    (a && a.textContent.toLowerCase().includes(term));
        el.style.display = match ? '' : 'none';
      });
    });
  }

  // ────────────────────────────────────────────────────────────────
  // 9. BOOT
  // ────────────────────────────────────────────────────────────────

  function init() {
    var yearEl = document.getElementById('footer-year');
    if (yearEl) yearEl.textContent = new Date().getFullYear();

    buildSidebar();

    var locale = detectLocale();
    var app    = resolveApp(locale);
    renderApp(app);

    initSearch();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();
