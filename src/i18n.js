(function () {
    var translations = {
        en: {
            page_title_index: 'TILT - One Day, One Maze',
            page_title_support: 'TILT - Support',
            page_title_privacy: 'TILT - Privacy Policy',
            page_title_terms: 'TILT - Terms of Service',
            banner_text: "🎉 We're live on Product Hunt today — upvote us!",
            footer_copyright: '© 2026 TILT. All rights reserved.',
            footer_designed: 'Designed with simplicity in mind.',
            footer_support: 'Support',
            footer_privacy: 'Privacy Policy',
            footer_terms: 'Terms of Service',

            nav_features: 'Features',
            nav_how_to_play: 'How to Play',
            nav_support: 'Support',

            hero_pill: 'Available on iOS',
            hero_h1: 'One Day.<br/><span class="text-slate-400">One Maze.</span><br/>One Chance.',
            hero_p: "Every day at midnight, a fresh maze appears. The world gets the same one. Tilt your device, race the clock — and don't touch the walls.",
            hero_download: 'Download on App Store',
            hero_stat1: 'New maze every day',
            hero_stat2: 'One shot per day',
            hero_stat3: 'Accounts needed',

            feat1_pill: 'Race',
            feat1_h2: 'The race against time begins.',
            feat1_p: 'The moment you start, the clock ticks. Navigate from the red dot to the goal as fast as you can. A new maze drops every single day at midnight UTC — everyone in the world solving the same challenge.',
            feat2_pill: 'Careful',
            feat2_h2: 'Every wall hit costs you.',
            feat2_p: 'Touch a wall and pay the price — time penalties that grow with each collision. Early bumps are forgiving, but repeated hits snowball fast. Speed matters, but precision matters more.',
            feat2_penalty_label: 'Max penalty per hit',
            feat2_grows_label: 'Grows each collision',
            feat3_pill: 'Finished',
            feat3_h2: 'Solve it. Own it.',
            feat3_p: "Hit the goal and see your final time. Clean, no clutter, no distractions. Just you and your score. Tomorrow the maze resets — today's run is yours to keep.",
            feat4_pill: 'Archive',
            feat4_h2: 'Your history, saved locally.',
            feat4_p: "Every completed maze is stored right on your device — no account, no cloud, no sign-in. Browse past mazes, revisit your times, and see how far you've come.",
            feat5_pill: 'Analyze',
            feat5_h2: 'Watch your winning run.',
            feat5_p: 'After you finish, replay your exact run from start to finish. Study your path, spot where you lost time, and figure out how to do even better tomorrow.',

            how_pill: 'Simple',
            how_h2: 'How it works',
            step1_h3: 'Open the app',
            step1_p: "Today's maze is already waiting. No setup, no loading screen, no tutorial to skip.",
            step2_h3: 'Tilt to navigate',
            step2_p: "Use your device's tilt to move the ball. Reach the goal without touching the walls.",
            step3_h3: 'Beat your time',
            step3_p: 'Your run is saved. Come back tomorrow for a brand new maze and try to go faster.',

            device_pill: 'Universal',
            device_p: 'Built for both. The maze adapts to your screen — same challenge, perfect on any device.',

            cta_h2: 'Ready to TILT?',
            cta_p: 'A new maze is waiting for you right now. No sign-up. Just play.',
            cta_download: 'Download on App Store',
            cta_note: 'Free · iOS · No account needed',

            nav_game_rules: 'Game Rules',
            nav_contact_us: 'Contact Us',

            support_badge: 'Support Center',
            support_h1: 'How can we help you <br /><span class="text-slate-500">navigate the maze?</span>',
            support_p: 'Find answers to common questions, learn the rules of the game, or get in touch with our team.',

            faq_h2: 'Frequently Asked Questions',
            faq1_q: 'When does the maze reset?',
            faq1_a: 'A new maze is generated every 24 hours at midnight UTC. Everyone in the world gets the exact same maze to solve that day!',
            faq2_q: 'What are the time penalties?',
            faq2_a: 'Each wall hit adds a penalty that grows with each collision — early bumps cost less, but repeated hits add up fast. The penalty caps at 2.10s per hit, so precision matters more the further you go.',
            faq3_q: 'Can I replay old mazes?',
            faq3_a: 'You can view your past performance in the Archive section, but daily mazes can only be played competitively on their specific day.',
            faq4_q: 'Is my progress saved?',
            faq4_a: "Yes! Your runs and times are automatically saved to your device's local storage. No account needed.",

            contact_h2: 'Contact Us',
            label_name: 'Name',
            placeholder_name: 'Your name',
            label_email: 'Email',
            label_message: 'Message',
            placeholder_message: 'How can we help?',
            btn_send: 'Send Message',
            form_sending: 'Sending...',
            form_success: "Message sent! We'll get back to you soon.",
            form_error: 'Something went wrong. Please try again.',

            rules_h3: 'Game Rules',
            rule1: 'Reach the goal in the shortest time possible.',
            rule2: "Don't touch the maze walls! Penalties grow with each hit, up to 2.10s.",
            rule3: 'You only get one maze a day. Make it count!',

            legal_h3: 'Legal',
            legal_privacy: 'Privacy Policy',
            legal_terms: 'Terms of Service',

            badge_legal: 'Legal',
            privacy_h1: 'Privacy Policy',
            last_updated_privacy: 'Last updated: March 2026',
            privacy_overview_h2: 'Overview',
            privacy_overview_p: 'TILT is a daily maze game for iOS. We are committed to protecting your privacy. This policy explains what data TILT does and does not collect.',
            privacy_no_collect_h2: 'Data We Do Not Collect',
            privacy_no_collect_p: 'TILT does not collect, store, or transmit any personal information. Specifically:',
            privacy_li1: 'No account registration or login required',
            privacy_li2: 'No name, email address, or contact information collected',
            privacy_li3: 'No location data collected',
            privacy_li4: 'No usage analytics or tracking',
            privacy_li5: 'No data shared with third parties',
            privacy_local_h2: 'Local Storage',
            privacy_local_p: 'Your game results and run history are saved locally on your device only. This data never leaves your device and is not accessible to us.',
            privacy_children_h2: "Children's Privacy",
            privacy_children_p: 'Since TILT collects no data whatsoever, it is safe for users of all ages.',
            privacy_contact_h2: 'Contact',
            privacy_contact_p: 'If you have any questions about this privacy policy, you can reach us at <a href="mailto:alp_yurtseven@icloud.com" class="font-medium text-slate-900 dark:text-slate-100 underline underline-offset-2">alp_yurtseven@icloud.com</a>.',

            terms_h1: 'Terms of Service',
            last_updated_terms: 'Last updated: March 2026',
            terms_acceptance_h2: 'Acceptance of Terms',
            terms_acceptance_p: 'By downloading or using TILT, you agree to these Terms of Service. If you do not agree, please do not use the app.',
            terms_about_h2: 'About TILT',
            terms_about_p: 'TILT is a daily maze game for iOS. A new maze is generated every day at midnight UTC. All players worldwide receive the same maze. The goal is to navigate from start to finish in the shortest time possible, avoiding wall collisions.',
            terms_use_h2: 'Use of the App',
            terms_use_p: 'You agree to use TILT only for its intended purpose as a game. You agree not to:',
            terms_use_li1: 'Attempt to reverse engineer or modify the app',
            terms_use_li2: 'Use automated tools or scripts to manipulate game results',
            terms_use_li3: 'Use the app in any way that violates applicable laws',
            terms_ip_h2: 'Intellectual Property',
            terms_ip_p: 'All content, design, and code within TILT are the property of the developer. You may not reproduce, distribute, or create derivative works without explicit permission.',
            terms_disclaimer_h2: 'Disclaimer',
            terms_disclaimer_p: 'TILT is provided "as is" without warranties of any kind. We do not guarantee uninterrupted availability of the game or daily maze generation. We are not liable for any damages arising from use of the app.',
            terms_changes_h2: 'Changes to Terms',
            terms_changes_p: 'We may update these terms from time to time. Continued use of TILT after any changes constitutes acceptance of the new terms.',
            terms_contact_h2: 'Contact',
            terms_contact_p: 'Questions about these terms? Contact us at <a href="mailto:alp_yurtseven@icloud.com" class="font-medium text-slate-900 dark:text-slate-100 underline underline-offset-2">alp_yurtseven@icloud.com</a>.',
        },
        tr: {
            page_title_index: 'TILT - Bir Gün, Bir Labirent',
            page_title_support: 'TILT - Destek',
            page_title_privacy: 'TILT - Gizlilik Politikası',
            page_title_terms: 'TILT - Kullanım Koşulları',
            banner_text: "🎉 Bugün Product Hunt'tayız — bize oy ver!",
            footer_copyright: '© 2026 TILT. Tüm hakları saklıdır.',
            footer_designed: 'Sadelik gözetilerek tasarlanmıştır.',
            footer_support: 'Destek',
            footer_privacy: 'Gizlilik Politikası',
            footer_terms: 'Kullanım Koşulları',

            nav_features: 'Özellikler',
            nav_how_to_play: 'Nasıl Oynanır',
            nav_support: 'Destek',

            hero_pill: "iOS'ta Mevcut",
            hero_h1: 'Bir Gün.<br/><span class="text-slate-400">Bir Labirent.</span><br/>Bir Şans.',
            hero_p: 'Her gece yarısı yeni bir labirent belirir. Tüm dünya aynı labirenti çözer. Cihazını eğ, saate karşı koş — ve duvarlara dokunma.',
            hero_download: "App Store'dan İndir",
            hero_stat1: 'Her gün yeni labirent',
            hero_stat2: 'Günde bir hak',
            hero_stat3: 'Hesap gerekmez',

            feat1_pill: 'Yarış',
            feat1_h2: 'Zamana karşı yarış başlıyor.',
            feat1_p: "Başladığın an saat işlemeye başlar. Kırmızı noktadan hedefe mümkün olan en hızlı şekilde git. Her gün gece yarısı UTC'de yeni bir labirent düşer — dünyanın her yerinden herkes aynı zorluğu çözer.",
            feat2_pill: 'Dikkat',
            feat2_h2: 'Her duvar çarpışması seni yavaşlatır.',
            feat2_p: 'Duvara çarp ve bedelini öde — her çarpışmayla büyüyen zaman cezaları. İlk çarpmalar affedilir, ama tekrarlanan isabetler hızla birikir. Hız önemli, ama hassasiyet daha da önemli.',
            feat2_penalty_label: 'Çarpışma başına max ceza',
            feat2_grows_label: 'Her çarpışmada artar',
            feat3_pill: 'Bitti',
            feat3_h2: 'Çöz. Sahiplen.',
            feat3_p: 'Hedefe ulaş ve nihai sürenizi gör. Temiz, dağınıklık yok, dikkat dağıtıcı yok. Sadece sen ve skorun. Yarın labirent sıfırlanır — bugünkü koşun senindir.',
            feat4_pill: 'Arşiv',
            feat4_h2: 'Geçmişin, cihazında saklı.',
            feat4_p: "Tamamlanan her labirent doğrudan cihazında saklanır — hesap yok, bulut yok, giriş yok. Geçmiş labirentleri gözden geçir, sürelerini yeniden incele ve ne kadar ilerlediğini gör.",
            feat5_pill: 'Analiz',
            feat5_h2: 'Kazanan koşunu izle.',
            feat5_p: 'Bitirdikten sonra koşunun başından sonuna kadar tam olarak tekrar izle. Rotanı incele, zamanını nerede kaybettiğini bul ve yarın nasıl daha iyi yapacağını anla.',

            how_pill: 'Basit',
            how_h2: 'Nasıl çalışır',
            step1_h3: 'Uygulamayı aç',
            step1_p: 'Bugünkü labirent seni zaten bekliyor. Kurulum yok, yükleme ekranı yok, atlanacak eğitim yok.',
            step2_h3: 'Eğerek yönet',
            step2_p: 'Topu hareket ettirmek için cihazının eğimini kullan. Duvarlara dokunmadan hedefe ulaş.',
            step3_h3: 'Zamanını geç',
            step3_p: 'Koşun kaydedildi. Yarın yepyeni bir labirent için geri gel ve daha hızlı gitmeye çalış.',

            device_pill: 'Evrensel',
            device_p: 'Her ikisi için de yapıldı. Labirent ekranına uyum sağlar — aynı zorluk, her cihazda mükemmel.',

            cta_h2: "TILT'e hazır mısın?",
            cta_p: 'Şu anda seni bekleyen yeni bir labirent var. Kayıt gerekmez. Sadece oyna.',
            cta_download: "App Store'dan İndir",
            cta_note: 'Ücretsiz · iOS · Hesap gerekmez',

            nav_game_rules: 'Oyun Kuralları',
            nav_contact_us: 'Bize Ulaşın',

            support_badge: 'Destek Merkezi',
            support_h1: 'Labirentte yolunu bulmana <br /><span class="text-slate-500">nasıl yardımcı olabiliriz?</span>',
            support_p: 'Sık sorulan soruların yanıtlarını bulun, oyun kurallarını öğrenin ya da ekibimizle iletişime geçin.',

            faq_h2: 'Sık Sorulan Sorular',
            faq1_q: 'Labirent ne zaman sıfırlanır?',
            faq1_a: "Her 24 saatte bir, gece yarısı UTC'de yeni bir labirent oluşturulur. Dünyanın her yerinden herkes aynı günde aynı labirenti çözer!",
            faq2_q: 'Zaman cezaları nelerdir?',
            faq2_a: 'Her duvar çarpışması, her isabette büyüyen bir ceza ekler — erken çarpmalar daha az maliyetlidir, ancak tekrarlanan isabetler hızla birikir. Ceza, çarpışma başına 2,10 saniyeyle sınırlıdır; bu nedenle ilerledikçe hassasiyet daha da önem kazanır.',
            faq3_q: 'Eski labirentleri tekrar oynayabilir miyim?',
            faq3_a: 'Arşiv bölümünde geçmiş performansını görüntüleyebilirsin, ancak günlük labirentler yalnızca belirli günde rekabetçi olarak oynanabilir.',
            faq4_q: 'İlerlemem kaydediliyor mu?',
            faq4_a: 'Evet! Koşularınız ve süreleriniz otomatik olarak cihazınızın yerel depolama alanına kaydedilir. Hesap gerekmez.',

            contact_h2: 'Bize Ulaşın',
            label_name: 'Ad',
            placeholder_name: 'Adınız',
            label_email: 'E-posta',
            label_message: 'Mesaj',
            placeholder_message: 'Size nasıl yardımcı olabiliriz?',
            btn_send: 'Mesaj Gönder',
            form_sending: 'Gönderiliyor...',
            form_success: 'Mesaj gönderildi! En kısa sürede size döneceğiz.',
            form_error: 'Bir şeyler ters gitti. Lütfen tekrar deneyin.',

            rules_h3: 'Oyun Kuralları',
            rule1: 'Hedefe mümkün olan en kısa sürede ulaş.',
            rule2: 'Labirent duvarlarına dokunma! Cezalar her çarpışmada artar, maksimum 2,10 saniye.',
            rule3: 'Günde yalnızca bir labirent hakkın var. İyi kullan!',

            legal_h3: 'Yasal',
            legal_privacy: 'Gizlilik Politikası',
            legal_terms: 'Kullanım Koşulları',

            badge_legal: 'Yasal',
            privacy_h1: 'Gizlilik Politikası',
            last_updated_privacy: 'Son güncelleme: Mart 2026',
            privacy_overview_h2: 'Genel Bakış',
            privacy_overview_p: "TILT, iOS için günlük bir labirent oyunudur. Gizliliğinizi korumaya kararlıyız. Bu politika, TILT'in hangi verileri toplayıp toplamadığını açıklar.",
            privacy_no_collect_h2: 'Toplamadığımız Veriler',
            privacy_no_collect_p: 'TILT herhangi bir kişisel bilgi toplamaz, depolamaz veya iletmez. Özellikle:',
            privacy_li1: 'Hesap kaydı veya giriş gerekmez',
            privacy_li2: 'İsim, e-posta adresi veya iletişim bilgisi toplanmaz',
            privacy_li3: 'Konum verisi toplanmaz',
            privacy_li4: 'Kullanım analizi veya takip yapılmaz',
            privacy_li5: 'Veriler üçüncü taraflarla paylaşılmaz',
            privacy_local_h2: 'Yerel Depolama',
            privacy_local_p: 'Oyun sonuçlarınız ve koşu geçmişiniz yalnızca cihazınızda yerel olarak kaydedilir. Bu veriler cihazınızı hiçbir zaman terk etmez ve bize erişilemez.',
            privacy_children_h2: 'Çocuk Gizliliği',
            privacy_children_p: 'TILT hiçbir veri toplamadığından, her yaştaki kullanıcı için güvenlidir.',
            privacy_contact_h2: 'İletişim',
            privacy_contact_p: 'Bu gizlilik politikası hakkında sorularınız varsa, bize <a href="mailto:alp_yurtseven@icloud.com" class="font-medium text-slate-900 dark:text-slate-100 underline underline-offset-2">alp_yurtseven@icloud.com</a> adresinden ulaşabilirsiniz.',

            terms_h1: 'Kullanım Koşulları',
            last_updated_terms: 'Son güncelleme: Mart 2026',
            terms_acceptance_h2: 'Koşulların Kabulü',
            terms_acceptance_p: "TILT'i indirerek veya kullanarak bu Kullanım Koşulları'nı kabul etmiş olursunuz. Kabul etmiyorsanız lütfen uygulamayı kullanmayın.",
            terms_about_h2: 'TILT Hakkında',
            terms_about_p: "TILT, iOS için günlük bir labirent oyunudur. Her gün gece yarısı UTC'de yeni bir labirent oluşturulur. Tüm oyuncular dünya genelinde aynı labirenti alır. Amaç, duvar çarpışmalarından kaçınarak başlangıçtan bitişe mümkün olan en kısa sürede gitmektir.",
            terms_use_h2: 'Uygulamanın Kullanımı',
            terms_use_p: "TILT'i yalnızca bir oyun olarak amaçlanan şekilde kullanmayı kabul ediyorsunuz. Şunları yapmamayı kabul ediyorsunuz:",
            terms_use_li1: 'Uygulamayı tersine mühendislik yapmaya veya değiştirmeye çalışmak',
            terms_use_li2: 'Oyun sonuçlarını manipüle etmek için otomatik araçlar veya komut dosyaları kullanmak',
            terms_use_li3: 'Uygulamayı geçerli yasaları ihlal edecek herhangi bir şekilde kullanmak',
            terms_ip_h2: 'Fikri Mülkiyet',
            terms_ip_p: 'TILT içindeki tüm içerik, tasarım ve kod geliştiricinin mülkiyetindedir. Açık izin olmaksızın kopyalayamazsınız, dağıtamazsınız veya türev çalışmalar oluşturamazsınız.',
            terms_disclaimer_h2: 'Sorumluluk Reddi',
            terms_disclaimer_p: 'TILT, herhangi bir garanti olmaksızın "olduğu gibi" sunulmaktadır. Oyunun veya günlük labirent oluşturmanın kesintisiz kullanılabilirliğini garanti etmiyoruz. Uygulamanın kullanımından kaynaklanan herhangi bir zarardan sorumlu değiliz.',
            terms_changes_h2: 'Koşullardaki Değişiklikler',
            terms_changes_p: "Bu koşulları zaman zaman güncelleyebiliriz. Herhangi bir değişiklikten sonra TILT'i kullanmaya devam etmeniz yeni koşulları kabul ettiğiniz anlamına gelir.",
            terms_contact_h2: 'İletişim',
            terms_contact_p: 'Bu koşullar hakkında sorularınız mı var? <a href="mailto:alp_yurtseven@icloud.com" class="font-medium text-slate-900 dark:text-slate-100 underline underline-offset-2">alp_yurtseven@icloud.com</a> adresinden bize ulaşın.',
        }
    };

    var savedLang = localStorage.getItem('tilt_lang') || 'en';
    window.currentLang = savedLang;

    function applyTranslations(lang) {
        window.currentLang = lang;
        localStorage.setItem('tilt_lang', lang);
        document.documentElement.lang = lang;

        document.querySelectorAll('[data-i18n]').forEach(function (el) {
            var key = el.getAttribute('data-i18n');
            if (translations[lang] && translations[lang][key] !== undefined) {
                el.textContent = translations[lang][key];
            }
        });

        document.querySelectorAll('[data-i18n-html]').forEach(function (el) {
            var key = el.getAttribute('data-i18n-html');
            if (translations[lang] && translations[lang][key] !== undefined) {
                el.innerHTML = translations[lang][key];
            }
        });

        document.querySelectorAll('[data-i18n-placeholder]').forEach(function (el) {
            var key = el.getAttribute('data-i18n-placeholder');
            if (translations[lang] && translations[lang][key] !== undefined) {
                el.placeholder = translations[lang][key];
            }
        });

        var titleKey = document.documentElement.getAttribute('data-i18n-title');
        if (titleKey && translations[lang] && translations[lang][titleKey]) {
            document.title = translations[lang][titleKey];
        }

        var btn = document.getElementById('lang-toggle');
        if (btn) {
            btn.textContent = lang === 'en' ? '🇹🇷' : '🇬🇧';
            btn.title = lang === 'en' ? 'Türkçeye geç' : 'Switch to English';
        }
    }

    window.toggleLanguage = function () {
        applyTranslations(window.currentLang === 'en' ? 'tr' : 'en');
    };

    window.getI18n = function (key) {
        return (translations[window.currentLang] && translations[window.currentLang][key]) || key;
    };

    document.addEventListener('DOMContentLoaded', function () {
        applyTranslations(savedLang);
    });
})();
