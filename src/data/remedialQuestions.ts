import { Question, TopicCategory } from '../types/exam';

export const REMEDIAL_QUESTION_BANK: Record<TopicCategory, Question[]> = {
  'Biografi': [
    {
      id: 101,
      number: 1,
      topic: 'Biografi',
      type: 'pg',
      difficulty: 'Sedang-Sulit',
      contextTag: 'Remedial Biografi: Membedakan Orientasi vs Reorientasi',
      prompt: 'Di bawah ini yang merupakan ciri khas bagian ORIENTASI dalam struktur teks biografi adalah...',
      pgOptions: [
        { key: 'A', text: 'Berisi pandangan dan simpulan evaluatif penulis terhadap jasa tokoh bagi bangsa' },
        { key: 'B', text: 'Memuat pengenalan identitas tokoh, latar belakang keluarga, dan masa kecil atau awal kehidupan' },
        { key: 'C', text: 'Memaparkan konflik pelik ketika tokoh berhadapan dengan lawan politiknya di pengadilan' },
        { key: 'D', text: 'Menguraikan instruksi langkah-langkah praktis meneladani keberhasilan tokoh' },
        { key: 'E', text: 'Menjelaskan data statistik penjualan buku karya tokoh selama sepuluh tahun berturut-turut' }
      ],
      pgCorrectAnswer: 'B',
      explanation: {
        coreConcept: 'Struktur Teks Biografi: Orientasi',
        analysis: 'Orientasi adalah bagian pengantar teks biografi yang mengenalkan tokoh kepada pembaca (nama lengkap, tempat dan tanggal lahir, latar belakang keluarga, serta lingkungan masa kanak-kanak). Bagian penutup yang memuat pandangan pribadi penulis disebut Reorientasi.',
        distractorAnalysis: 'Opsi A adalah Reorientasi, Opsi C adalah Peristiwa/Masalah, Opsi D adalah Teks Prosedur.'
      }
    },
    {
      id: 102,
      number: 2,
      topic: 'Biografi',
      type: 'pg',
      difficulty: 'Sedang-Sulit',
      contextTag: 'Remedial Biografi: Keteladanan Tokoh',
      prompt: 'Hal yang membedakan teks biografi dengan teks novel fiksi adalah...',
      pgOptions: [
        { key: 'A', text: 'Biografi hanya memuat dialog rekaan sedangkan novel berbasis data sensus resmi' },
        { key: 'B', text: 'Biografi menyajikan kisah hidup nyata yang dapat diverifikasi fakta empirisnya, sedangkan novel merupakan karya imajinasi/rekaan pengarang' },
        { key: 'C', text: 'Biografi tidak boleh memuat latar tempat nyata di dunia' },
        { key: 'D', text: 'Biografi selalu ditulis oleh tokoh yang bersangkutan secara pribadi' },
        { key: 'E', text: 'Biografi hanya boleh menceritakan tokoh yang masih hidup saat teks diterbitkan' }
      ],
      pgCorrectAnswer: 'B',
      explanation: {
        coreConcept: 'Faktual vs Fiksional',
        analysis: 'Biografi adalah teks nonfiksi berlandaskan peristiwa faktual nyata seorang tokoh. Novel merupakan karya fiksi (rekaan imajinatif sastra). Jika ditulis oleh tokoh sendiri disebut autobiografi, bukan biografi.',
        distractorAnalysis: 'Opsi D salah karena biografi ditulis orang lain. Opsi E salah karena tokoh yang sudah wafat pun sering ditulis biografinya.'
      }
    },
    {
      id: 103,
      number: 3,
      topic: 'Biografi',
      type: 'benar_salah',
      difficulty: 'Sedang-Sulit',
      contextTag: 'Remedial Biografi: Kaidah Fakta & Struktur',
      prompt: 'Tentukan kebenaran dari pernyataan-pernyataan berikut mengenai teks biografi!',
      statements: [
        {
          id: 'r_bio_1',
          statement: 'Bagian reorientasi dalam teks biografi bersifat opsional (boleh ada atau tidak ada) menurut kaidah struktur teks naratif faktual.',
          correctAnswer: true
        },
        {
          id: 'r_bio_2',
          statement: 'Teks biografi menggunakan sudut pandang orang pertama "aku" atau "saya" sebagai narator utama jalannya cerita.',
          correctAnswer: false
        },
        {
          id: 'r_bio_3',
          statement: 'Keteladanan tokoh dapat diserap pembaca melalui cara tokoh menyelesaikan masalah dan rintangan hidupnya.',
          correctAnswer: true
        }
      ],
      explanation: {
        coreConcept: 'Kaidah Penulisan & Sudut Pandang Biografi',
        analysis: 'Pernyataan 1 BENAR: Reorientasi bersifat opsional/pilihan (penulis boleh menambahkan simpulan atau tidak).\nPernyataan 2 SALAH: Biografi menggunakan sudut pandang orang KETIGA ("ia", "beliau", atau nama tokoh) karena ditulis oleh orang lain. Sudut pandang orang pertama digunakan dalam autobiografi.\nPernyataan 3 BENAR: Inti nilai keteladanan biografi terletak pada resolusi dan keteguhan moral tokoh saat menghadapi rintangan.'
      }
    },
    {
      id: 104,
      number: 4,
      topic: 'Biografi',
      type: 'pg',
      difficulty: 'Sedang',
      contextTag: 'Remedial Biografi: Penanda Waktu & Konjungsi',
      prompt: 'Dalam teks biografi, konjungsi penanda urutan kronologis peristiwa (temporal) sering digunakan untuk...',
      pgOptions: [
        { key: 'A', text: 'Menjelaskan hubungan sebab-akibat ilmiah dari fenomena alam yang terjadi' },
        { key: 'B', text: 'Menghubungkan runtunan peristiwa hidup tokoh dari masa lampau hingga pencapaian puncaknya secara runtut' },
        { key: 'C', text: 'Mengajak pembaca untuk segera membeli produk biografi di toko buku terdekat' },
        { key: 'D', text: 'Menyamarkan tahun kelahiran tokoh agar pembaca penasaran' },
        { key: 'E', text: 'Mengubah teks narasi menjadi teks deskripsi keindahan fisik sang tokoh semata' }
      ],
      pgCorrectAnswer: 'B',
      explanation: {
        coreConcept: 'Konjungsi Temporal dalam Narasi Biografi',
        analysis: 'Konjungsi temporal (seperti "sejak itu", "pada tahun berikutnya", "setelah menyelesaikan studi", "kemudian") berfungsi merajut alur kronologis riwayat tokoh agar linier dan mudah dipahami pembaca.',
        distractorAnalysis: 'Opsi A adalah ciri eksplanasi. Opsi C adalah ciri teks iklan persuasif.'
      }
    },
    {
      id: 105,
      number: 5,
      topic: 'Biografi',
      type: 'pg_kompleks',
      difficulty: 'Sedang-Sulit',
      contextTag: 'Remedial Biografi: Unsur Nilai Keteladanan',
      prompt: 'Nilai-nilai keteladanan yang umumnya dapat dipetik dari biografi tokoh pejuang kemandirian teknologi dan ekonomi antara lain... (Pilih 2 atau lebih)',
      pgKompleksOptions: [
        { id: 'b_val1', text: 'Ketangguhan menghadapi keterbatasan fasilitas dan kegagalan eksperimen' },
        { id: 'b_val2', text: 'Integritas memegang teguh komitmen pengabdian bagi nusa dan bangsa' },
        { id: 'b_val3', text: 'Prinsip menghalalkan segala cara demi menjatuhkan reputasi kompetitor' },
        { id: 'b_val4', text: 'Sikap pembelajar sepanjang hayat (lifelong learner) yang tidak cepat berpuas diri' }
      ],
      pgKompleksCorrectAnswers: ['b_val1', 'b_val2', 'b_val4'],
      explanation: {
        coreConcept: 'Nilai Karakter Positif dalam Biografi',
        analysis: 'Biografi inspiratif menonjolkan etos kerja gigih, integritas, dan semangat belajar tinggi. Menghalalkan segala cara (b_val3) adalah perbuatan nir-etika yang bukan keteladanan.',
        distractorAnalysis: 'Nilai keteladanan selalu berupa karakter mulia (akhlak/integritas/resiliensi).'
      }
    }
  ],

  'Skimming & Scanning': [
    {
      id: 201,
      number: 1,
      topic: 'Skimming & Scanning',
      type: 'pg',
      difficulty: 'Sedang',
      contextTag: 'Remedial Membaca Cepat: Scanning Kamus',
      prompt: 'Ketika kamu membuka Kamus Besar Bahasa Indonesia (KBBI) untuk mencari arti kata "reorientasi", teknik membaca cepat yang kamu terapkan adalah...',
      pgOptions: [
        { key: 'A', text: 'Skimming; karena kamu membaca keseluruhan halaman kamus dari huruf A hingga Z' },
        { key: 'B', text: 'Scanning; karena kamu langsung meluncur ke lema huruf R dan memindai kata spesifik "reorientasi"' },
        { key: 'C', text: 'Membaca kritis mendalam; karena setiap entri kosakata harus dihafal terlebih dahulu' },
        { key: 'D', text: 'Skimming; karena tujuan utamanya adalah mencari kesan umum keindahan cetakan kamus' },
        { key: 'E', text: 'Membaca estafet; karena dibaca bersamaan dengan lima orang rekan sekelas' }
      ],
      pgCorrectAnswer: 'B',
      explanation: {
        coreConcept: 'Aplikasi Scanning dalam Pencarian Indeks/Kamus',
        analysis: 'Mencari kata tertentu dalam kamus atau indeks buku adalah contoh klasik penerapan teknik SCANNING (memindai informasi spesifik), karena pembaca sudah memiliki kata sasaran dan hanya mencari lokasi kata tersebut berada tanpa membaca entri lainnya.',
        distractorAnalysis: 'Skimming bertujuan mencari garis besar atau intisari, bukan mencari lema kata tertentu di kamus.'
      }
    },
    {
      id: 202,
      number: 2,
      topic: 'Skimming & Scanning',
      type: 'pg',
      difficulty: 'Sedang',
      contextTag: 'Remedial Membaca Cepat: Skimming Koran',
      prompt: 'Setiap pagi, seorang manajer menghabiskan 3 menit membuka lima lembar surat kabar ekonomi untuk mengetahui topik hangat yang sedang menjadi tren bisnis hari ini. Teknik yang digunakan adalah...',
      pgOptions: [
        { key: 'A', text: 'Scanning data angka inflasi' },
        { key: 'B', text: 'Skimming headline (tajuk utama), subjudul, dan paragraf awal berita' },
        { key: 'C', text: 'Membaca intensif seluruh teks berita baris per baris' },
        { key: 'D', text: 'Membaca analitis terhadap kesalahan pengetikan wartawan' },
        { key: 'E', text: 'Membaca nyaring di depan audiens' }
      ],
      pgCorrectAnswer: 'B',
      explanation: {
        coreConcept: 'Skimming untuk Mengetahui Tren Berita',
        analysis: 'Membaca tajuk utama dan paragraf pertama untuk menangkap gambaran besar topik harian adalah penerapan teknik Skimming (membaca layap).',
        distractorAnalysis: 'Scanning hanya mencari poin spesifik. Membaca baris demi baris tidak mungkin selesai dalam 3 menit untuk lima lembar koran.'
      }
    },
    {
      id: 203,
      number: 3,
      topic: 'Skimming & Scanning',
      type: 'benar_salah',
      difficulty: 'Sedang-Sulit',
      contextTag: 'Remedial Membaca Cepat: Efisiensi & Gerak Mata',
      prompt: 'Tentukan kebenaran dari pernyataan-pernyataan berikut mengenai teknik membaca cepat!',
      statements: [
        {
          id: 'r_ss_1',
          statement: 'Membaca cepat yang efektif menghindari regresi (kebiasaan mengulang-ulang bacaan ke kalimat sebelumnya tanpa alasan penting).',
          correctAnswer: true
        },
        {
          id: 'r_ss_2',
          statement: 'Vokalisasi (mengucapkan kata dengan bibir berbisik saat membaca dalam hati) dapat mempercepat kecepatan membaca.',
          correctAnswer: false
        },
        {
          id: 'r_ss_3',
          statement: 'Keberhasilan teknik scanning sangat bergantung pada kejelasan kata kunci (keyword) yang telah ditentukan sebelum memindai teks.',
          correctAnswer: true
        }
      ],
      explanation: {
        coreConcept: 'Hambatan Membaca Cepat: Regresi & Vokalisasi',
        analysis: 'Pernyataan 1 BENAR: Regresi adalah kebiasaan buruk yang menurunkan kecepatan membaca.\nPernyataan 2 SALAH: Vokalisasi (subvokalisasi/gerak bibir) membatasi kecepatan mata sebatas kecepatan bicara (150-200 kata per menit), sehingga justru menghambat kecepatan membaca otak.\nPernyataan 3 BENAR: Tanpa kata kunci yang jelas, mata akan tersesat dan gagal melakukan scanning efisien.'
      }
    },
    {
      id: 204,
      number: 4,
      topic: 'Skimming & Scanning',
      type: 'pg',
      difficulty: 'Sedang-Sulit',
      contextTag: 'Remedial Membaca Cepat: Pola Scanning',
      prompt: 'Gerakan mata yang lazim dilakukan saat melakukan scanning pada daftar nama atau indeks berformat kolom adalah...',
      pgOptions: [
        { key: 'A', text: 'Melingkar bolak-balik searah jarum jam' },
        { key: 'B', text: 'Vertikal dari atas ke bawah menelusuri alfabet dan kata kunci' },
        { key: 'C', text: 'Diagonal menyilang tanpa memperhatikan urutan huruf' },
        { key: 'D', text: 'Menatap satu titik di tengah halaman tanpa menggerakkan bola mata' },
        { key: 'E', text: 'Membaca setiap suku kata secara mengeja' }
      ],
      pgCorrectAnswer: 'B',
      explanation: {
        coreConcept: 'Gerakan Mata Vertikal dalam Scanning Kolom',
        analysis: 'Pada teks berkolom (daftar isi, indeks, tabel alfabetis), gerakan mata bergerak vertikal dari atas ke bawah mengikuti urutan abjad hingga kata kunci yang dicari ditemukan.',
        distractorAnalysis: 'Gerakan horizontal zig-zag sering dipakai saat skimming paragraf, sedangkan kolom menggunakan scanning vertikal.'
      }
    },
    {
      id: 205,
      number: 5,
      topic: 'Skimming & Scanning',
      type: 'pg_kompleks',
      difficulty: 'Sedang-Sulit',
      contextTag: 'Remedial Membaca Cepat: Bagian Strategis Skimming',
      prompt: 'Ketika melakukan skimming pada sebuah bab buku setebal 20 halaman, bagian-bagian yang paling strategis untuk dibaca layap adalah... (Pilih 2 atau lebih)',
      pgKompleksOptions: [
        { id: 'ss_opt1', text: 'Judul bab dan subjudul-subjudul di dalamnya' },
        { id: 'ss_opt2', text: 'Nomor halaman ganjil dan nama percetakan' },
        { id: 'ss_opt3', text: 'Paragraf pembuka bab dan paragraf penutup (rangkuman)' },
        { id: 'ss_opt4', text: 'Bagan, grafik, atau teks yang dicetak tebal/miring' }
      ],
      pgKompleksCorrectAnswers: ['ss_opt1', 'ss_opt3', 'ss_opt4'],
      explanation: {
        coreConcept: 'Titik Fokus Skimming',
        analysis: 'Bagian strategis skimming memuat intisari bab: judul, subjudul, paragraf pembuka/penutup, serta ilustrasi/grafik penjelas. Nomor halaman percetakan (ss_opt2) tidak memuat gagasan konseptual.',
        distractorAnalysis: 'Fokuskan pandangan pada hierarki struktur teks.'
      }
    }
  ],

  'Kata Serapan': [
    {
      id: 301,
      number: 1,
      topic: 'Kata Serapan',
      type: 'pg',
      difficulty: 'Sedang',
      contextTag: 'Remedial Serapan: Konsep Adopsi',
      prompt: 'Di bawah ini yang merupakan contoh kata serapan ADOPSI murni (tanpa perubahan huruf maupun lafal sama sekali) adalah...',
      pgOptions: [
        { key: 'A', text: 'Aktivitas (dari activity)' },
        { key: 'B', text: 'Data dan Video (dari data dan video)' },
        { key: 'C', text: 'Kolektif (dari collective)' },
        { key: 'D', text: 'Praktik (dari practice)' },
        { key: 'E', text: 'Standardisasi (dari standardization)' }
      ],
      pgCorrectAnswer: 'B',
      explanation: {
        coreConcept: 'Kata Serapan Adopsi',
        analysis: 'Kata "data" dan "video" diambil seutuhnya tanpa penyesuaian ejaan dari bahasa aslinya. Sedangkan aktivitas, kolektif, praktik, dan standardisasi semuanya mengalami penyesuaian ejaan fonologis (adaptasi).',
        distractorAnalysis: 'Perhatikan ciri adopsi: penulisan hurufnya 100% sama dengan kata asing asalnya.'
      }
    },
    {
      id: 302,
      number: 2,
      topic: 'Kata Serapan',
      type: 'pg',
      difficulty: 'Sedang-Sulit',
      contextTag: 'Remedial Serapan: Kata Serapan Bahasa Arab',
      prompt: 'Kelompok kata berikut yang SELURUHNYA merupakan kata serapan dari bahasa ARAB adalah...',
      pgOptions: [
        { key: 'A', text: 'Amanah, ikhlas, dan musyawarah' },
        { key: 'B', text: 'Faktur, kuitansi, dan wesel' },
        { key: 'C', text: 'Bendera, mentega, dan jendela' },
        { key: 'D', text: 'Panca, darma, dan karya' },
        { key: 'E', text: 'Manajemen, inovasi, dan efisiensi' }
      ],
      pgCorrectAnswer: 'A',
      explanation: {
        coreConcept: 'Asal Bahasa Serapan: Arab',
        analysis: 'Amanah (amānah), ikhlas (ikhlāṣ), dan musyawarah (musyāwarah) berasal dari bahasa Arab. B dari Belanda, C dari Portugis, D dari Sanskerta, E dari Inggris.',
        distractorAnalysis: 'Kata serapan Arab banyak berkaitan dengan nilai etika, agama, musyawarah, dan peradilan.'
      }
    },
    {
      id: 303,
      number: 3,
      topic: 'Kata Serapan',
      type: 'pg',
      difficulty: 'Sedang-Sulit',
      contextTag: 'Remedial Serapan: Aturan Akhiran -ity Menjadi -itas',
      prompt: 'Berdasarkan pedoman penyerapan istilah asing, akhiran asing "-ity" diserap ke dalam bahasa Indonesia menjadi "-itas". Manakah bentuk kata baku yang SESUAI dengan kaidah tersebut?',
      pgOptions: [
        { key: 'A', text: 'Kreatifitas dan Efektifitas' },
        { key: 'B', text: 'Kreativitas dan Efektivitas' },
        { key: 'C', text: 'Kreatipitas dan Efektipitas' },
        { key: 'D', text: 'Kreativisir dan Efektifisir' },
        { key: 'E', text: 'Kreatifitas dan Efektifitas' }
      ],
      pgCorrectAnswer: 'B',
      explanation: {
        coreConcept: 'Kaidah Akhiran -ity -> -itas',
        analysis: 'Penyerapan creativity -> kreativitas, effectiveness -> efektivitas, activity -> aktivitas, productivity -> produktivitas. Bentuk baku menggunakan huruf "v", bukan "f" (kreativitas, bukan kreatifitas).',
        distractorAnalysis: 'Walaupun kata dasarnya "kreatif" (dengan f), ketika diserap dari bentuk nomina asing "-ity", kaidah pembentukan kata istilah menetapkan bentuk "-ivitas" (kreativitas, efektivitas, produktivitas).'
      }
    },
    {
      id: 304,
      number: 4,
      topic: 'Kata Serapan',
      type: 'benar_salah',
      difficulty: 'Sedang-Sulit',
      contextTag: 'Remedial Serapan: Serapan Portugis vs Belanda',
      prompt: 'Tentukan kebenaran dari pernyataan asal-usul kata serapan berikut!',
      statements: [
        {
          id: 'r_ks_1',
          statement: 'Kata "meja", "jendela", dan "sepatu" diserap ke dalam bahasa Indonesia dari bahasa Portugis.',
          correctAnswer: true
        },
        {
          id: 'r_ks_2',
          statement: 'Kata "kantor", "bengkel", dan "asbak" diserap dari bahasa Arab.',
          correctAnswer: false
        },
        {
          id: 'r_ks_3',
          statement: 'Kata "daring" dan "luring" merupakan contoh kata serapan bentuk adaptasi ejaan murni dari bahasa Latin.',
          correctAnswer: false
        }
      ],
      explanation: {
        coreConcept: 'Klasifikasi Bahasa Asal Kata Serapan',
        analysis: 'Pernyataan 1 BENAR: Meja (mesa), jendela (janela), sepatu (sapato) berasal dari bahasa Portugis.\nPernyataan 2 SALAH: Kantor (kantoor), bengkel (winkel), asbak (asbak) berasal dari bahasa Belanda.\nPernyataan 3 SALAH: Daring (dalam jaringan) dan luring (luar jaringan) merupakan istilah KREASI / akronim bahasa Indonesia untuk memadankan istilah Inggris online dan offline.'
      }
    },
    {
      id: 305,
      number: 5,
      topic: 'Kata Serapan',
      type: 'pg_kompleks',
      difficulty: 'Sedang-Sulit',
      contextTag: 'Remedial Serapan: Pasangan Kata Baku',
      prompt: 'Pilihlah pasangan kata di bawah ini yang KEDUANYA merupakan bentuk baku menurut KBBI dan EYD V! (Pilih 2 atau lebih)',
      pgKompleksOptions: [
        { id: 'baku1', text: 'Analisis dan Hipotesis' },
        { id: 'baku2', text: 'Analisa dan Hipotesa' },
        { id: 'baku3', text: 'Risiko dan Standardisasi' },
        { id: 'baku4', text: 'Resiko dan Standarisasi' }
      ],
      pgKompleksCorrectAnswers: ['baku1', 'baku3'],
      explanation: {
        coreConcept: 'Bentuk Baku Kata Serapan Ilmiah',
        analysis: 'Bentuk baku: "analisis" (bukan analisa), "hipotesis" (bukan hipotesa), "risiko" (bukan resiko), "standardisasi" (bukan standarisasi, karena dari standardization diserap standard + isasi).\nMaka pasangan yang benar adalah baku1 dan baku3.',
        distractorAnalysis: 'Akhiran -sa (analisa, diagnosa, hipotesa) adalah bentuk tidak baku di era bahasa Indonesia modern.'
      }
    }
  ],

  'Tanda Petik': [
    {
      id: 401,
      number: 1,
      topic: 'Tanda Petik',
      type: 'pg',
      difficulty: 'Sedang',
      contextTag: 'Remedial Tanda Petik: Judul Puisi & Lagu',
      prompt: 'Kaidah EYD V menyatakan bahwa tanda petik ganda ("...") digunakan untuk mengapit...',
      pgOptions: [
        { key: 'A', text: 'Judul buku, majalah, dan surat kabar yang sudah terbit' },
        { key: 'B', text: 'Judul sajak, lagu, artikel, naskah drama, atau bab buku' },
        { key: 'C', text: 'Terjemahan bahasa asing di dalam kurung' },
        { key: 'D', text: 'Nama orang yang memiliki gelar bangsawan' },
        { key: 'E', text: 'Angka tahun kelahiran seorang pahlawan' }
      ],
      pgCorrectAnswer: 'B',
      explanation: {
        coreConcept: 'Fungsi Tanda Petik Ganda untuk Judul Karya Bagian',
        analysis: 'Tanda petik ganda dipakai untuk mengapit judul karya yang merupakan bagian dari karya yang lebih besar atau belum terbit mandiri (puisi/sajak, lagu, artikel, bab buku, film pendek). Judul buku, majalah, dan koran dicetak miring (huruf miring).',
        distractorAnalysis: 'Opsi A memakai huruf miring, bukan tanda petik ganda.'
      }
    },
    {
      id: 402,
      number: 2,
      topic: 'Tanda Petik',
      type: 'pg',
      difficulty: 'Sedang-Sulit',
      contextTag: 'Remedial Tanda Petik: Makna / Terjemahan Kata',
      prompt: 'Cermatilah kalimat berikut:\nKata noken berasal dari bahasa Papua yang bermakna \'tas tradisional rajutan kulit kayu\'.\n\nPenggunaan tanda petik tunggal pada frasa \'tas tradisional rajutan kulit kayu\' di atas adalah...',
      pgOptions: [
        { key: 'A', text: 'Salah, karena harus menggunakan tanda petik ganda' },
        { key: 'B', text: 'Salah, karena seharusnya dicetak miring tanpa tanda baca' },
        { key: 'C', text: 'Benar, karena tanda petik tunggal dipakai mengapit makna, terjemahan, atau penjelasan kata/ungkapan' },
        { key: 'D', text: 'Salah, karena tanda petik tunggal hanya boleh dipakai untuk judul lagu' },
        { key: 'E', text: 'Salah, karena tanda kurung lebih diutamakan' }
      ],
      pgCorrectAnswer: 'C',
      explanation: {
        coreConcept: 'Fungsi Tanda Petik Tunggal: Mengapit Terjemahan/Makna',
        analysis: 'EYD V Pasal Tanda Petik Tunggal menyatakan bahwa tanda petik tunggal digunakan untuk mengapit makna, terjemahan, atau penjelasan kata/ungkapan asing atau daerah. Kalimat tersebut tepat dan benar.',
        distractorAnalysis: 'Banyak orang salah mengira terjemahan harus diapit petik ganda.'
      }
    },
    {
      id: 403,
      number: 3,
      topic: 'Tanda Petik',
      type: 'pg',
      difficulty: 'Sedang-Sulit',
      contextTag: 'Remedial Tanda Petik: Petikan dalam Petikan',
      prompt: 'Penggunaan tanda petik tunggal untuk mengapit petikan di dalam petikan langsung terdapat pada kalimat...',
      pgOptions: [
        { key: 'A', text: '"Kita harus segera menerapkan sistem \'jemput bola\' dalam pemasaran," kata manajer.' },
        { key: 'B', text: 'Ibu berseru, "Dengarlah suara \'tok-tok-tok\' di pintu depan!"' },
        { key: 'C', text: 'Adik berkata, \'Saya ingin membeli buku cerita baru.\'' },
        { key: 'D', text: 'Pak Guru menerangkan bahwa tadarus bermakna \'membaca Al-Qur\'an bersama-sama\'.' },
        { key: 'E', text: '"Apakah kau melihat pengumuman itu?" tanya Ani kepada Budi.' }
      ],
      pgCorrectAnswer: 'B',
      explanation: {
        coreConcept: 'Petikan di Dalam Petikan Langsung',
        analysis: 'Kalimat B: Petikan langsung diapit petik ganda ("Dengarlah suara..."), dan di dalamnya terdapat tiruan bunyi/petikan suara \'tok-tok-tok\' yang diapit tanda petik tunggal. Inilah fungsi mengapit petikan di dalam petikan.\nPada kalimat A, \'jemput bola\' adalah ungkapan kiasan/makna khusus yang seharusnya diapit petik ganda jika bukan di dalam petikan ganda, atau huruf miring/petik ganda biasa.',
        distractorAnalysis: 'Opsi C salah karena petikan langsung harus memakai petik ganda ("..."). Opsi D adalah fungsi penjelasan makna, bukan petikan dalam petikan.'
      }
    },
    {
      id: 404,
      number: 4,
      topic: 'Tanda Petik',
      type: 'benar_salah',
      difficulty: 'Sedang-Sulit',
      contextTag: 'Remedial Tanda Petik: Penempatan Tanda Titik & Koma',
      prompt: 'Tentukan kebenaran dari aturan penulisan tanda baca menurut EYD V berikut!',
      statements: [
        {
          id: 'r_tp_1',
          statement: 'Tanda titik atau tanda koma penutup kalimat langsung diletakkan di DALAM tanda petik penutup (contoh: "Saya siap bertanding," kata Dodi).',
          correctAnswer: true
        },
        {
          id: 'r_tp_2',
          statement: 'Tanda petik tunggal digunakan untuk mengapit judul film cerita panjang yang diputar di bioskop nasional.',
          correctAnswer: false
        },
        {
          id: 'r_tp_3',
          statement: 'Tanda petik ganda dapat dipakai mengapit istilah ilmiah yang kurang dikenal atau kata yang mempunyai arti khusus.',
          correctAnswer: true
        }
      ],
      explanation: {
        coreConcept: 'Kaidah Posisi Tanda Baca pada Petikan (EYD V)',
        analysis: 'Pernyataan 1 BENAR: Tanda koma dan titik penutup berada di dalam tanda petik ganda.\nPernyataan 2 SALAH: Judul film layar lebar dicetak miring (huruf miring), bukan tanda petik tunggal.\nPernyataan 3 BENAR: Contoh: Dilarang memakai celana "begi" di lingkungan sekolah.'
      }
    },
    {
      id: 405,
      number: 5,
      topic: 'Tanda Petik',
      type: 'pg_kompleks',
      difficulty: 'Sedang-Sulit',
      contextTag: 'Remedial Tanda Petik: Identifikasi Kalimat Tepat',
      prompt: 'Manakah kalimat-kalimat berikut yang penulisan tanda bacanya BENAR sesuai kaidah EYD V? (Pilih 2 atau lebih)',
      pgKompleksOptions: [
        { id: 'tp_k1', text: 'Sajak "Karawang-Bekasi" karya Chairil Anwar merefleksikan pengorbanan para syuhada.' },
        { id: 'tp_k2', text: 'Kudapan tradisional itu disebut lemper, yakni \'ketan berisi cincangan daging ayam\'.' },
        { id: 'tp_k3', text: 'Surat kabar \'Kompas\' memberitakan peluncuran satelit baru.' },
        { id: 'tp_k4', text: 'Ia memakai baju bergaris-garis yang dijuluki model "zebra".' }
      ],
      pgKompleksCorrectAnswers: ['tp_k1', 'tp_k2', 'tp_k4'],
      explanation: {
        coreConcept: 'Penerapan Kaidah Tanda Petik Tunggal & Ganda',
        analysis: '- tp_k1 BENAR: Judul sajak diapit tanda petik ganda.\n- tp_k2 BENAR: Makna/penjelasan kudapan lemper diapit tanda petik tunggal.\n- tp_k4 BENAR: Kata yang memiliki arti khusus/julukan diapit petik ganda.\n- tp_k3 SALAH: Nama surat kabar Kompas harus ditulis dengan huruf miring, bukan tanda petik tunggal.',
        distractorAnalysis: 'Jangan gunakan tanda petik tunggal untuk judul surat kabar atau buku.'
      }
    }
  ],

  'Teks Prosedur': [
    {
      id: 501,
      number: 1,
      topic: 'Teks Prosedur',
      type: 'pg',
      difficulty: 'Sedang',
      contextTag: 'Remedial Teks Prosedur: Kalimat Imperatif',
      prompt: 'Di bawah ini yang merupakan contoh kalimat IMPERATIF yang lazim digunakan dalam teks prosedur kewirausahaan adalah...',
      pgOptions: [
        { key: 'A', text: 'Konsumen merasa sangat puas terhadap cita rasa keripik singkong pedas tersebut.' },
        { key: 'B', text: 'Pastikan kemasan produk tertutup kedap udara guna menjaga kerenyahan keripik hingga enam bulan ke depan!' },
        { key: 'C', text: 'Banyak pengusaha rintisan mengalami kegagalan pada tahun pertama akibat minim riset pasar.' },
        { key: 'D', text: 'Apakah Anda sudah mengetahui tata cara pendaftaran merek dagang ke HAKI?' },
        { key: 'E', text: 'Perekonomian nasional diprediksi akan bertumbuh sebesar lima persen tahun depan.' }
      ],
      pgCorrectAnswer: 'B',
      explanation: {
        coreConcept: 'Kalimat Imperatif dalam Teks Prosedur',
        analysis: 'Kalimat imperatif adalah kalimat yang mengandung perintah, instruksi, atau anjuran operasional (ditandai kata kerja "Pastikan", partikel -lah, tanda seru). Kalimat B merupakan instruksi kerja langsung.',
        distractorAnalysis: 'Opsi A adalah deklaratif emotif. Opsi C adalah deklaratif fakta. Opsi D adalah interogatif (tanya).'
      }
    },
    {
      id: 502,
      number: 2,
      topic: 'Teks Prosedur',
      type: 'pg',
      difficulty: 'Sedang-Sulit',
      contextTag: 'Remedial Teks Prosedur: Mengurutkan Petunjuk',
      prompt: 'Perhatikan langkah-langkah acak validasi ide produk berikut:\n(1) Menguji coba prototipe kepada 50 calon pelanggan awal.\n(2) Mengumpulkan data umpan balik dan keluhan calon pelanggan.\n(3) Membuat prototipe produk paling sederhana (MVP).\n(4) Memperbaiki fitur produk sebelum diluncurkan ke pasar massal.\n\nUrutan kronologis yang paling tepat adalah...',
      pgOptions: [
        { key: 'A', text: '(3) - (1) - (2) - (4)' },
        { key: 'B', text: '(1) - (3) - (2) - (4)' },
        { key: 'C', text: '(3) - (2) - (1) - (4)' },
        { key: 'D', text: '(4) - (3) - (1) - (2)' },
        { key: 'E', text: '(1) - (2) - (3) - (4)' }
      ],
      pgCorrectAnswer: 'A',
      explanation: {
        coreConcept: 'Urutan Kronologis Siklus Validasi MVP',
        analysis: 'Alur logis: Buat prototipe MVP (3) -> Ujikan ke sampel calon pelanggan (1) -> Himpun umpan balik/keluhan (2) -> Lakukan perbaikan/iterasi sebelum peluncuran massal (4). Urutan: (3) - (1) - (2) - (4).',
        distractorAnalysis: 'Prototipe harus dibuat terlebih dahulu sebelum dapat diuji coba kepada konsumen.'
      }
    },
    {
      id: 503,
      number: 3,
      topic: 'Teks Prosedur',
      type: 'benar_salah',
      difficulty: 'Sedang',
      contextTag: 'Remedial Teks Prosedur: Struktur Prosedur',
      prompt: 'Tentukan kebenaran dari pernyataan mengenai karakteristik teks prosedur berikut!',
      statements: [
        {
          id: 'r_tp_s1',
          statement: 'Teks prosedur protokol memungkinkan langkah-langkahnya dilakukan secara fleksibel tanpa harus kaku bertukar urutan, asalkan tujuan akhir tetap tercapai.',
          correctAnswer: true
        },
        {
          id: 'r_tp_s2',
          statement: 'Verba tingkah laku (seperti memahami, menyetujui) tidak boleh ada sama sekali dalam teks prosedur apa pun.',
          correctAnswer: false
        },
        {
          id: 'r_tp_s3',
          statement: 'Bagian tujuan pada teks prosedur berfungsi menjelaskan hasil akhir atau manfaat yang akan didapatkan pembaca jika mengikuti langkah-langkah secara benar.',
          correctAnswer: true
        }
      ],
      explanation: {
        coreConcept: 'Jenis Teks Prosedur: Protokol & Verba Tingkah Laku',
        analysis: 'Pernyataan 1 BENAR: Prosedur protokol adalah prosedur yang urutannya fleksibel (contoh: tata cara menyeduh mi instan atau memakai atribut seragam).\nPernyataan 2 SALAH: Verba tingkah laku sering digunakan pada tahap persetujuan, regulasi, dan kepatuhan (misal: "setujuilah syarat dan ketentuan").\nPernyataan 3 BENAR: Bagian Tujuan (Goal/Aim) memaparkan maksud dan target teks prosedur.'
      }
    },
    {
      id: 504,
      number: 4,
      topic: 'Teks Prosedur',
      type: 'pg',
      difficulty: 'Sedang-Sulit',
      contextTag: 'Remedial Teks Prosedur: Verba Material',
      prompt: 'Kata di bawah ini yang tergolong VERBA MATERIAL (tindakan fisik nyata yang dilakukan anggota tubuh/alat) dalam teks prosedur adalah...',
      pgOptions: [
        { key: 'A', text: 'Menimbang, memotong, dan melarutkan' },
        { key: 'B', text: 'Menyadari, memikirkan, dan merasakan' },
        { key: 'C', text: 'Senang, bangga, dan puas' },
        { key: 'D', text: 'Keberhasilan, keuntungan, dan kekayaan' },
        { key: 'E', text: 'Sangat, agak, dan paling' }
      ],
      pgCorrectAnswer: 'A',
      explanation: {
        coreConcept: 'Verba Material',
        analysis: 'Verba material merujuk pada aktivitas fisik konkret yang dapat diamati: menimbang bahan dengan timbangan, memotong dengan pisau, melarutkan bubuk dalam air.\nB adalah verba mental, C adalah adjektiva (sifat), D adalah nomina (benda abstrak), E adalah adverbia derajat.',
        distractorAnalysis: 'Jangan tertukar antara verba material (tindakan fisik) dengan verba mental (proses berpikir/merasa).'
      }
    },
    {
      id: 505,
      number: 5,
      topic: 'Teks Prosedur',
      type: 'pg_kompleks',
      difficulty: 'Sedang-Sulit',
      contextTag: 'Remedial Teks Prosedur: Ciri Konjungsi Penanda Urutan',
      prompt: 'Kata hubung (konjungsi) temporal yang lazim menandai transisi urutan pengerjaan dalam teks prosedur antara lain... (Pilih 2 atau lebih)',
      pgKompleksOptions: [
        { id: 'kj1', text: 'Kemudian dan setelah itu' },
        { id: 'kj2', text: 'Karena dan sebab' },
        { id: 'kj3', text: 'Selanjutnya dan lalu' },
        { id: 'kj4', text: 'Walaupun dan meskipun' }
      ],
      pgKompleksCorrectAnswers: ['kj1', 'kj3'],
      explanation: {
        coreConcept: 'Konjungsi Temporal Urutan Kerja',
        analysis: '"Kemudian", "setelah itu", "selanjutnya", "lalu" adalah konjungsi urutan temporal penahapan kerja. "Karena/sebab" adalah konjungsi kausalitas. "Walaupun/meskipun" adalah konjungsi konsesif perlawanan.',
        distractorAnalysis: 'Pilih konjungsi yang menunjukkan derap waktu atau sekuens langkah.'
      }
    }
  ],

  'Presentasi Bisnis': [
    {
      id: 601,
      number: 1,
      topic: 'Presentasi Bisnis',
      type: 'pg',
      difficulty: 'Sedang',
      contextTag: 'Remedial Presentasi: Bahasa Tubuh & Kontak Mata',
      prompt: 'Bahasa tubuh yang paling tepat ditunjukkan seorang presenter bisnis ketika berbicara di depan calon investor adalah...',
      pgOptions: [
        { key: 'A', text: 'Berdiri tegak, tangan terbuka santai, dan membagi kontak mata secara natural ke sekeliling ruangan' },
        { key: 'B', text: 'Menyilangkan kedua tangan di depan dada dengan pandangan menatap lantai' },
        { key: 'C', text: 'Terus-menerus menatap layar proyektor dan membelakangi audiens' },
        { key: 'D', text: 'Memasukkan kedua tangan ke dalam saku celana sambil mondar-mandir tergesa-gesa' },
        { key: 'E', text: 'Duduk bersandar santai di kursi sambil memainkan gawai pribadi' }
      ],
      pgCorrectAnswer: 'A',
      explanation: {
        coreConcept: 'Bahasa Tubuh (Body Language) Presentasi Profesional',
        analysis: 'Postur tegak, tangan terbuka (open gesture), dan kontak mata merata menunjukkan kepercayaan diri, keterbukaan, kesiapan bermitra, dan rasa hormat kepada audiens.',
        distractorAnalysis: 'Membelakangi audiens (C), melipat tangan (B), atau memasukkan tangan ke saku (D) mencerminkan sikap tertutup, defensif, atau tidak siap.'
      }
    },
    {
      id: 602,
      number: 2,
      topic: 'Presentasi Bisnis',
      type: 'pg',
      difficulty: 'Sedang-Sulit',
      contextTag: 'Remedial Presentasi: Sesi Tanya Jawab (Q&A)',
      prompt: 'Ketika audiens melontarkan pertanyaan yang jawabannya belum diketahui secara pasti oleh pemateri bisnis, tindakan etis yang harus dilakukan adalah...',
      pgOptions: [
        { key: 'A', text: 'Mengarang angka palsu secara meyakinkan agar terlihat menguasai segala hal' },
        { key: 'B', text: 'Mengakui secara terus terang bahwa data spesifik tersebut belum dipegang saat ini, lalu berjanji akan menindaklanjuti dan mengirimkan data valid setelah sesi berakhir' },
        { key: 'C', text: 'Menertawakan penanya dan menyebut pertanyaan itu tidak berbobot' },
        { key: 'D', text: 'Meninggalkan panggung secara tiba-tiba tanpa pamit' },
        { key: 'E', text: 'Mengalihkan mikrofon kepada audiens lain tanpa menanggapi penanya pertama' }
      ],
      pgCorrectAnswer: 'B',
      explanation: {
        coreConcept: 'Etika Menjawab Pertanyaan Sulit (Q&A)',
        analysis: 'Kejujuran intelektual adalah fondasi integritas wirausaha. Mengakui keterbatasan data spesifik dengan komitmen tindak lanjut (follow-up) pascapresentasi jauh lebih dihargai investor daripada memberikan informasi fiktif yang menyesatkan.',
        distractorAnalysis: 'Mengarang angka palsu (A) dapat berakibat fatal pada tahap uji kelayakan (due diligence).'
      }
    },
    {
      id: 603,
      number: 3,
      topic: 'Presentasi Bisnis',
      type: 'benar_salah',
      difficulty: 'Sedang-Sulit',
      contextTag: 'Remedial Presentasi: Prinsip Pitch Deck',
      prompt: 'Tentukan kebenaran dari prinsip-prinsip pembuatan slide presentasi pitch deck berikut!',
      statements: [
        {
          id: 'r_pb_s1',
          statement: 'Prinsip desain slide pitch deck yang baik mengutamakan kesederhanaan visual, menggunakan grafik yang mudah dipahami, dan menghindari tumpukan teks yang terlalu padat.',
          correctAnswer: true
        },
        {
          id: 'r_pb_s2',
          statement: 'Menyembunyikan informasi mengenai pesaing (kompetitor) dan mengklaim pasar 100% tanpa lawan sangat disukai oleh investor berpengalaman.',
          correctAnswer: false
        },
        {
          id: 'r_pb_s3',
          statement: 'Alokasi kebutuhan dana (The Ask / Use of Funds) wajib dicantumkan secara jelas agar calon pemodal tahu ke mana modal mereka akan dimanfaatkan.',
          correctAnswer: true
        }
      ],
      explanation: {
        coreConcept: 'Prinsip Slide Pitch Deck Efektif',
        analysis: 'Pernyataan 1 BENAR: Visual sederhana, grafik tajam, tidak bertele-tele.\nPernyataan 2 SALAH: Mengklaim tidak ada pesaing justru menunjukkan tim minim riset dan tidak memahami peta industri.\nPernyataan 3 BENAR: The Ask / Use of Funds adalah tujuan utama pitching pendanaan.'
      }
    },
    {
      id: 604,
      number: 4,
      topic: 'Presentasi Bisnis',
      type: 'pg',
      difficulty: 'Sedang-Sulit',
      contextTag: 'Remedial Presentasi: Manajemen Waktu',
      prompt: 'Jika seorang wirausahawan diberikan waktu presentasi selama 7 menit di depan dewan juri, pembagian waktu yang paling proporsional adalah...',
      pgOptions: [
        { key: 'A', text: '6 menit untuk menyapa audiens dan 1 menit untuk membaca 30 slide' },
        { key: 'B', text: '5 menit penyampaian inti masalah, solusi, bisnis model, traksi, dan 2 menit penutup serta persiapan sesi tanya jawab' },
        { key: 'C', text: '7 menit penuh membaca biodata anggota keluarga para pendiri startup' },
        { key: 'D', text: 'Menghabiskan 10 menit tanpa memedulikan bel peringatan panitia' },
        { key: 'E', text: 'Hanya bicara 30 detik lalu langsung memutar video komersial selama 6,5 menit' }
      ],
      pgCorrectAnswer: 'B',
      explanation: {
        coreConcept: 'Disiplin Waktu (Time Management) Presentasi',
        analysis: 'Menghormati batas waktu adalah etika dasar kompetisi dan pitching. Alokasi 5 menit untuk poin substansial (Problem, Solution, Business Model, Traction, The Ask) ditambah 2 menit rangkuman dan persiapan Q&A adalah proporsi yang seimbang dan disiplin.',
        distractorAnalysis: 'Melebihi batas waktu (opsi D) biasanya akan langsung dipotong mikrofonnya oleh moderator dan mengurangi skor etika.'
      }
    },
    {
      id: 605,
      number: 5,
      topic: 'Presentasi Bisnis',
      type: 'pg_kompleks',
      difficulty: 'Sedang-Sulit',
      contextTag: 'Remedial Presentasi: Elemen Value Proposition',
      prompt: 'Pernyataan nilai keunikan produk (Unique Value Proposition) dalam presentasi kewirausahaan harus mampu menjawab pertanyaan krusial berupa... (Pilih 2 atau lebih)',
      pgKompleksOptions: [
        { id: 'vp1', text: 'Mengapa solusi produk ini lebih baik, lebih cepat, atau lebih hemat dibanding solusi yang ada di pasar saat ini?' },
        { id: 'vp2', text: 'Masalah spesifik apa dari konsumen yang berhasil diselesaikan oleh inovasi produk ini?' },
        { id: 'vp3', text: 'Di kota mana mertua dari pemegang saham mayoritas bertempat tinggal?' },
        { id: 'vp4', text: 'Manfaat nyata apa yang langsung dirasakan pengguna saat mengonsumsi/menggunakan produk?' }
      ],
      pgKompleksCorrectAnswers: ['vp1', 'vp2', 'vp4'],
      explanation: {
        coreConcept: 'Elemen Esensial Unique Value Proposition (UVP)',
        analysis: 'Value proposition berfokus pada 3 pilar: keunggulan diferensiasi dibanding kompetitor (vp1), ketepatan penyelesaian masalah konsumen (vp2), dan manfaat riil terukur (vp4). Informasi personal keluarga (vp3) sama sekali tidak bernilai bisnis.',
        distractorAnalysis: 'Fokuskan pada nilai tambah yang diterima oleh konsumen.'
      }
    }
  ]
};
