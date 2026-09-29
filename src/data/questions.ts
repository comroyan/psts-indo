import { Question } from '../types/exam';

export const EXAM_QUESTIONS: Question[] = [
  // ==========================================
  // SOAL 1 - 10: TINGKAT SEDANG
  // ==========================================
  {
    id: 1,
    number: 1,
    topic: 'Biografi',
    type: 'pg',
    difficulty: 'Sedang',
    contextTag: 'Hakikat Teks Biografi',
    readingPassage: {
      title: 'Perjalanan Sang Visioner Dirgantara',
      text: `Sejak kecil di Parepare, Bacharuddin Jusuf Habibie telah menunjukkan ketertarikan luar biasa pada konstruksi mekanik dan aerodinamika. Di Jerman, ia tidak hanya menyelesaikan studi doktoralnya dengan predikat summa cum laude, tetapi juga merumuskan teori keretakan sayap pesawat yang dikenal dunia sebagai "Crack Progression Theory". Kendati karier cemerlang dan kenyamanan fasilitas riset di Eropa terbuka lebar, Habibie memilih kembali ke tanah air demi mewujudkan impian kemandirian teknologi dirgantara Indonesia melalui IPTN. Keberhasilannya menerbangkan pesawat N-250 Gatotkaca membuktikan bahwa dedikasi melampaui segala keterbatasan logistik.`
    },
    prompt: 'Berdasarkan kutipan teks di atas, hakikat mendasar teks biografi yang paling menonjol sebagai sarana edukasi bagi pembaca adalah...',
    pgOptions: [
      { key: 'A', text: 'Menyajikan rekaan cerita dramatis tokoh terkenal agar memicu decak kagum publik' },
      { key: 'B', text: 'Menyampaikan riwayat hidup faktual tokoh yang memuat nilai keteladanan, kegigihan, dan inspirasi moral' },
      { key: 'C', text: 'Menonjolkan keuntungan materiil dan prestise yang diraih seorang tokoh melalui koneksi internasional' },
      { key: 'D', text: 'Mendokumentasikan data teknis aerodinamika secara terperinci untuk referensi akademis mutlak' },
      { key: 'E', text: 'Mengkritik kebijakan pemerintah masa lalu melalui perjalanan hidup seseorang tanpa objektivitas' }
    ],
    pgCorrectAnswer: 'B',
    explanation: {
      coreConcept: 'Hakikat Teks Biografi',
      analysis: 'Teks biografi adalah teks naratif nonfiksi yang menceritakan riwayat hidup seorang tokoh yang ditulis oleh orang lain berdasarkan fakta empiris. Tujuan dan fungsi sosial utamanya adalah memberikan nilai keteladanan (edukatif), inspirasi kepribadian, serta motivasi hidup bagi pembaca melalui peristiwa nyata yang dialami sang tokoh.',
      distractorAnalysis: 'Opsi A salah karena biografi bukan rekaan (fiksi). Opsi C salah karena orientasinya bukan glorifikasi materiil. Opsi D salah karena data teknis hanya konteks pendukung, bukan hakikat teks biografi. Opsi E salah karena biografi berpegang pada objektivitas faktual.',
      eydRuleNote: 'Unsur struktur teks biografi: Orientasi -> Urutan Peristiwa & Masalah -> Reorientasi.'
    }
  },
  {
    id: 2,
    number: 2,
    topic: 'Skimming & Scanning',
    type: 'pg',
    difficulty: 'Sedang',
    contextTag: 'Teknik Membaca Cepat',
    prompt: 'Seorang siswa kelas XII diberi waktu 30 detik untuk menentukan apakah sebuah artikel setebal lima halaman membahas tentang etika bisnis digital atau sejarah penemuan mesin cetak. Teknik membaca cepat yang paling efektif dan tepat digunakan siswa tersebut beserta alasannya adalah...',
    pgOptions: [
      { key: 'A', text: 'Scanning; karena memfokuskan pandangan pada angka tahun dan nama penemu di tiap halaman' },
      { key: 'B', text: 'Skimming; karena bertujuan menangkap gagasan utama dan gambaran umum wacana secara cepat lewat judul, subjudul, dan kalimat topik' },
      { key: 'C', text: 'Scanning; karena membaca kata demi kata dari awal sampai akhir secara saksama tanpa melompati baris' },
      { key: 'D', text: 'Skimming; karena mencari nomor telepon dan alamat kantor penerbit yang tercetak di halaman sampul' },
      { key: 'E', text: 'Membaca intensif; karena seluruh isi artikel harus dianalisis struktur kebahasaannya terlebih dahulu' }
    ],
    pgCorrectAnswer: 'B',
    explanation: {
      coreConcept: 'Perbedaan Prinsip Skimming dan Scanning',
      analysis: 'Skimming (membaca layap) bertujuan memperoleh gambaran umum (gist), ide pokok wacana, serta memprediksi pokok pembahasan artikel dalam waktu sangat singkat melalui tajuk, ringkasan, atau kalimat awal/akhir paragraf. Sebaliknya, Scanning (membaca tatap/memindai) bertujuan mencari data khusus/spesifik (seperti angka, nomor, nama orang, istilah khusus). Menentukan topik 5 halaman dalam 30 detik memerlukan Skimming.',
      distractorAnalysis: 'Opsi A keliru menerapkan scanning untuk mencari tema umum. Opsi C mendeskripsikan membaca teliti bukan scanning. Opsi D keliru dalam tujuan skimming. Opsi E tidak mungkin dilakukan dalam batas 30 detik.',
      eydRuleNote: 'Kata kunci: Skimming = Ide Pokok / Gambaran Umum; Scanning = Informasi Spesifik / Fakta Tertentu.'
    }
  },
  {
    id: 3,
    number: 3,
    topic: 'Kata Serapan',
    type: 'pg',
    difficulty: 'Sedang',
    contextTag: 'Jenis Kata Serapan (Adopsi vs Adaptasi)',
    prompt: 'Perhatikan kalimat berikut:\n"Setiap tim startup dituntut memiliki sistem kerja yang transparan serta mampu menghasilkan inovasi produk yang memiliki kualitas unggul di supermarket modern."\n\nKata serapan dalam kalimat di atas yang masuk ke dalam kategori serapan proses ADOPSI adalah...',
    pgOptions: [
      { key: 'A', text: 'sistem dan transparan' },
      { key: 'B', text: 'inovasi dan produk' },
      { key: 'C', text: 'kualitas dan sistem' },
      { key: 'D', text: 'supermarket' },
      { key: 'E', text: 'transparan dan modern' }
    ],
    pgCorrectAnswer: 'D',
    explanation: {
      coreConcept: 'Klasifikasi Proses Penyerapan Bahasa Asing',
      analysis: 'Penyerapan bahasa asing terdiri atas:\n1. Adopsi: Pemakai bahasa mengambil bentuk dan makna bahasa asing secara seutuhnya tanpa modifikasi ejaan/lafal (contoh: supermarket, plaza, mall, data, bus).\n2. Adaptasi: Pemakai bahasa mengambil konsep bahasa asing dengan menyesuaikan ejaan, lafal, dan kaidah fonologi bahasa Indonesia (system -> sistem, innovation -> inovasi, transparent -> transparan, quality -> kualitas, product -> produk, modern -> modern [disesuaikan pelafalannya]).\nOleh karena itu, kata "supermarket" diambil secara utuh tanpa modifikasi huruf (Adopsi).',
      distractorAnalysis: 'Kata sistem (system), kualitas (quality), inovasi (innovation), dan transparan (transparent) semuanya melalui proses penyesuaian ejaan/akhiran (adaptasi).',
      eydRuleNote: 'Adopsi = bentuk ejaan sama persis dengan bahasa aslinya. Adaptasi = disesuaikan dengan Pedoman Umum Pembentukan Istilah (PUPI).'
    }
  },
  {
    id: 4,
    number: 4,
    topic: 'Skimming & Scanning',
    type: 'benar_salah',
    difficulty: 'Sedang',
    contextTag: 'Penerapan Teknik Membaca Cepat',
    prompt: 'Tentukan kebenaran dari masing-masing pernyataan berikut terkait teknik membaca cepat Skimming dan Scanning!',
    statements: [
      {
        id: 's1',
        statement: 'Mencari jam keberangkatan kereta api jurusan Jakarta–Surabaya pada lembar jadwal stasiun paling tepat menggunakan teknik scanning.',
        correctAnswer: true
      },
      {
        id: 's2',
        statement: 'Skimming dilakukan dengan menggerakkan pandangan melompat-lompat secara acak tanpa memperhatikan struktur paragraf pembuka dan penutup.',
        correctAnswer: false
      },
      {
        id: 's3',
        statement: 'Dalam teknik scanning, pembaca sudah memiliki kata kunci atau informasi target di dalam benak sebelum matanya menelusuri halaman teks.',
        correctAnswer: true
      }
    ],
    explanation: {
      coreConcept: 'Mekanisme Operasional Skimming dan Scanning',
      analysis: 'Pernyataan 1 BENAR: Mencari jadwal jam tertentu pada tabel adalah pencarian data spesifik (scanning).\nPernyataan 2 SALAH: Skimming bukan melompat tanpa arah, melainkan metode membaca terarah pada bagian-bagian strategis (judul, subjudul, kalimat topik paragraf pertama dan terakhir) untuk menangkap alur gagasan pokok.\nPernyataan 3 BENAR: Sebelum melakukan scanning, pembaca wajib menanamkan kata kunci spesifik (misal nama tahun "1945" atau istilah "omzet") agar radar visual fokus hanya pada target tersebut.',
      distractorAnalysis: 'Pengecoh sering menganggap skimming sama dengan membaca serampangan tanpa metode.'
    }
  },
  {
    id: 5,
    number: 5,
    topic: 'Kata Serapan',
    type: 'pg_kompleks',
    difficulty: 'Sedang',
    contextTag: 'Kata Serapan Bahasa Sanskerta',
    prompt: 'Bahasa Indonesia banyak menyerap kosakata dari bahasa Sanskerta, terutama yang berkaitan dengan konsep falsafah, kepemimpinan, dan bilangan. Pilihlah kata-kata berikut yang merupakan kata serapan dari bahasa SANSKERTA! (Pilih 2 atau lebih jawaban yang benar)',
    pgKompleksOptions: [
      { id: 'opt1', text: 'Pancasila dan Dasadarma' },
      { id: 'opt2', text: 'Kolega dan Bengkel' },
      { id: 'opt3', text: 'Swadaya dan Mahasiswa' },
      { id: 'opt4', text: 'Lelang dan Mentega' },
      { id: 'opt5', text: 'Karya dan Wisuda' }
    ],
    pgKompleksCorrectAnswers: ['opt1', 'opt3', 'opt5'],
    explanation: {
      coreConcept: 'Asal Usul Kata Serapan Bahasa Sanskerta',
      analysis: 'Unsur serapan dari bahasa Sanskerta antara lain:\n- Panca (lima), sila (prinsip), dasa (sepuluh), darma (kewajiban).\n- Swa- (sendiri -> swadaya, swasembada, swakelola), maha- (besar -> mahasiswa, maharaja).\n- Karya (pekerjaan/hasil kreasi), wisuda (pelantikan/peresmian).\n\nSementara itu:\n- "Kolega" dan "bengkel" (winkel) diserap dari bahasa Belanda.\n- "Lelang" (leilão) dan "mentega" (manteiga) diserap dari bahasa Portugis.',
      distractorAnalysis: 'Pilihan opt2 adalah serapan Belanda, sedangkan opt4 adalah serapan Portugis.'
    }
  },
  {
    id: 6,
    number: 6,
    topic: 'Tanda Petik',
    type: 'pg',
    difficulty: 'Sedang',
    contextTag: 'Aturan Tanda Petik Ganda Sesuai EYD V',
    prompt: 'Menurut Pedoman Umum Ejaan Bahasa Indonesia (EYD Edisi V), penggunaan tanda petik ganda ("...") yang TEPAT terdapat pada kalimat...',
    pgOptions: [
      { key: 'A', text: 'Ia sedang menelaah artikel berjudul "Strategi Menembus Pasar Ekspor bagi Pelaku UMKM" di majalah wirausaha.' },
      { key: 'B', text: 'Novel "Laskar Pelangi" karya Andrea Hirata telah diterbitkan berulang kali oleh penerbit besar.' },
      { key: 'C', text: 'Keluarga Pak Burhan tinggal di perumahan "Griya Asri" sejak lima tahun lalu.' },
      { key: 'D', text: 'Seminar kewirausahaan itu dihadiri oleh ribuan "peserta" dari seluruh penjuru daerah.' },
      { key: 'E', text: 'Surat kabar "Kompas" memuat ulasan mengenai pertumbuhan ekonomi kreatif nasional.' }
    ],
    pgCorrectAnswer: 'A',
    explanation: {
      coreConcept: 'Kaidah Penggunaan Tanda Petik Ganda (EYD V)',
      analysis: 'Berdasarkan EYD V:\n1. Tanda petik ganda dipakai untuk mengapit judul puisi, judul lagu, judul artikel, naskah drama, atau bab buku yang belum terbit tersendiri (bagian dari karya yang lebih besar). Jadi judul artikel "Strategi Menembus Pasar Ekspor bagi Pelaku UMKM" diapit tanda petik ganda (BENAR).\n2. Judul buku/novel dan surat kabar yang sudah terbit harus ditulis dengan HURUF MIRING, bukan tanda petik ganda (Laskar Pelangi dan Kompas seharusnya miring).\n3. Nama perumahan tidak diapit tanda petik. Kata "peserta" adalah kata umum yang tidak memerlukan tanda petik kecuali bermakna konotatif khusus yang janggal.',
      distractorAnalysis: 'Banyak siswa terkecoh mengira judul novel atau surat kabar diapit tanda petik. Aturan baku: buku, majalah, dan surat kabar dicetak miring; artikel, bab, puisi, dan lagu diapit tanda petik ganda.',
      eydRuleNote: 'Contoh EYD V: Sajak "Aku" karya Chairil Anwar terdapat pada buku Deru Campur Debu.'
    }
  },
  {
    id: 7,
    number: 7,
    topic: 'Tanda Petik',
    type: 'pg',
    difficulty: 'Sedang',
    contextTag: 'Aturan Tanda Petik Tunggal Sesuai EYD V',
    prompt: 'Kaidah EYD V mengatur penggunaan tanda petik tunggal (\'...\'). Kalimat berikut yang menerapkan tanda petik tunggal secara TEPAT sesuai fungsinya adalah...',
    pgOptions: [
      { key: 'A', text: 'Dilarang keras menyebarkan berita \'bohong\' di ruang publik digital.' },
      { key: 'B', text: 'Istilah feed back dalam presentasi bisnis sering dipadankan dengan \'balikan\'.' },
      { key: 'C', text: 'Ibu membelikan adik buku cerita bergambar \'Si Kancil yang Cerdik\'.' },
      { key: 'D', text: 'Ia menjabat sebagai \'direktur utama\' pada perseroan terbatas tersebut.' },
      { key: 'E', text: 'Proyektor di ruang rapat itu \'rusak\' sejak kemarin sore.' }
    ],
    pgCorrectAnswer: 'B',
    explanation: {
      coreConcept: 'Fungsi Tanda Petik Tunggal (EYD V)',
      analysis: 'Fungsi resmi tanda petik tunggal (\'...\') menurut EYD V ada dua:\n1. Mengapit petikan yang terdapat di dalam petikan lain (kutipan dalam kutipan).\n2. Mengapit makna, terjemahan, atau penjelasan kata atau ungkapan (baik bahasa daerah maupun asing).\nPada kalimat B, kata "balikan" merupakan penjelasan makna/terjemahan dari istilah bahasa Inggris "feed back", sehingga wajib diapit tanda petik tunggal: feed back \'balikan\'. Ini sesuai kaidah baku.',
      distractorAnalysis: 'Opsi A, D, E tidak memerlukan tanda petik sama sekali karena merupakan kata umum. Opsi C adalah judul buku cerita yang seharusnya ditulis dengan huruf miring, bukan tanda petik tunggal.',
      eydRuleNote: 'Rumus: Kata Asing/Istilah + \'makna/terjemahannya\'. Contoh: retina \'dinding bola mata yang peka cahaya\'.'
    }
  },
  {
    id: 8,
    number: 8,
    topic: 'Teks Prosedur',
    type: 'pg',
    difficulty: 'Sedang',
    contextTag: 'Hakikat & Struktur Teks Prosedur',
    prompt: 'Ciri kebahasaan yang paling khas dan membedakan teks prosedur dari teks eksplanasi atau teks narasi adalah dominasi penggunaan...',
    pgOptions: [
      { key: 'A', text: 'Kata sifat emotif untuk menggugah perasaan haru pembaca' },
      { key: 'B', text: 'Kalimat imperatif (perintah/instruksi), verba material, dan konjungsi urutan waktu' },
      { key: 'C', text: 'Majas metafora dan personifikasi untuk memperindah diksi penulisan' },
      { key: 'D', text: 'Kalimat retoris yang tidak memerlukan jawaban nyata dari audiens' },
      { key: 'E', text: 'Sudut pandang orang pertama pelaku utama yang menceritakan riwayat pribadi' }
    ],
    pgCorrectAnswer: 'B',
    explanation: {
      coreConcept: 'Ciri Kebahasaan Teks Prosedur',
      analysis: 'Teks prosedur bertujuan membimbing pembaca melakukan atau membuat sesuatu langkah demi langkah secara runtut. Oleh karena itu, ciri kebahasaannya didominasi oleh:\n- Kalimat imperatif (perintah atau saran, misal: "Siapkanlah", "Pastikan", "Masukkan").\n- Verba material (kata kerja tindakan fisik, misal: "mengaduk", "mengisi", "menekan").\n- Konjungsi temporal (penanda urutan waktu: "pertama", "selanjutnya", "kemudian", "setelah itu").',
      distractorAnalysis: 'Opsi A adalah ciri teks deskripsi/puisi. Opsi C adalah ciri teks karya sastra cerpen/novel. Opsi D ciri pidato persuasif. Opsi E ciri autobiografi.',
      eydRuleNote: 'Struktur teks prosedur: Tujuan -> Alat & Bahan (opsional/material) -> Langkah-langkah -> Penutup/Penegasan Ulang.'
    }
  },
  {
    id: 9,
    number: 9,
    topic: 'Presentasi Bisnis',
    type: 'pg',
    difficulty: 'Sedang',
    contextTag: 'Etika Presentasi di Depan Audiens',
    prompt: 'Saat mempresentasikan rencana bisnis produk minuman organik di hadapan dewan investor dan audiens, sikap etis yang harus ditunjukkan oleh seorang wirausahawan ketika salah satu juri melontarkan kritik pedas terhadap estimasi biaya produksi adalah...',
    pgOptions: [
      { key: 'A', text: 'Langsung memotong pembicaraan juri untuk mempertahankan bahwa perhitungannya tidak pernah salah' },
      { key: 'B', text: 'Menunjukkan gestur tidak senang dan mengabaikan pertanyaan juri pada sesi penutupan' },
      { key: 'C', text: 'Mendengarkan dengan saksama tanpa menyela, berterima kasih atas masukan, lalu memberikan klarifikasi logis berbasis data secara santun' },
      { key: 'D', text: 'Menyalahkan tim keuangan di depan audiens sebagai pihak yang bertanggung jawab atas estimasi tersebut' },
      { key: 'E', text: 'Mengganti topik presentasi ke keunggulan kemasan agar audiens lupa pada kelemahan biaya produksi' }
    ],
    pgCorrectAnswer: 'C',
    explanation: {
      coreConcept: 'Etika Presentasi Bisnis & Komunikasi Interpersonal',
      analysis: 'Etika presentasi bisnis menuntut profesionalisme, keterbukaan terhadap kritik, dan kesantunan berbahasa. Ketika menghadapi kritik atau pertanyaan menantang:\n1. Tidak boleh menyela (active listening).\n2. Memberikan apresiasi atas perhatian penanya/investor.\n3. Menyampaikan argumen klarifikasi yang objektif, tenang, dan didukung data faktual tanpa sikap defensif apalagi menyalahkan rekan tim.',
      distractorAnalysis: 'Opsi A arogan dan merusak kredibilitas. Opsi B tidak profesional. Opsi D melanggar loyalitas tim dan integritas kepemimpinan. Opsi E menunjukkan penghindaran manipulatif.'
    }
  },
  {
    id: 10,
    number: 10,
    topic: 'Presentasi Bisnis',
    type: 'pg',
    difficulty: 'Sedang',
    contextTag: 'Komponen Utama Pitch Deck Bisnis',
    prompt: 'Dalam presentasi bisnis kewirausahaan (pitch deck), bagian yang paling krusial untuk dipaparkan pada 2 menit pertama presentasi guna merebut perhatian investor adalah...',
    pgOptions: [
      { key: 'A', text: 'Biografi lengkap seluruh kakek nenek pendiri usaha dan riwayat hobi pribadi' },
      { key: 'B', text: 'Rincian anggaran sewa gedung kantor untuk sepuluh tahun yang akan datang' },
      { key: 'C', text: 'Rumusan masalah nyata di masyarakat (Problem) dan solusi unik berdaya guna yang ditawarkan produk (Solution/Value Proposition)' },
      { key: 'D', text: 'Daftar kegagalan perusahaan kompetitor tanpa menyebutkan solusi dari produk sendiri' },
      { key: 'E', text: 'Struktur kode pemrograman perangkat lunak secara mendalam dan rumus matematika algoritma' }
    ],
    pgCorrectAnswer: 'C',
    explanation: {
      coreConcept: 'Struktur Esensial Pitch Deck Kewirausahaan',
      analysis: 'Dalam kaidah presentasi bisnis modern (metode Guy Kawasaki / Sequoia Capital), menit-menit awal harus difokuskan pada "Hook" yang menguraikan Masalah Nyata di Pasar (Pain Point/Problem) serta bagaimana produk yang diajukan menjadi Solusi Tepat Guna (Unique Value Proposition). Tanpa pemahaman masalah yang valid, investor tidak akan tertarik pada aspek teknis atau keuangan lainnya.',
      distractorAnalysis: 'Opsi A tidak relevan dengan bisnis. Opsi B terlalu dini dan tidak realistis. Opsi D tidak etis dan tidak produktif. Opsi E terlalu bertele-tele dan membosankan bagi audiens bisnis umum.'
    }
  },

  // ==========================================
  // SOAL 11 - 20: TINGKAT SEDANG - SULIT
  // ==========================================
  {
    id: 11,
    number: 11,
    topic: 'Biografi',
    type: 'pg',
    difficulty: 'Sedang-Sulit',
    contextTag: 'Analisis Fakta vs Opini Teks Biografi',
    readingPassage: {
      title: 'Jejak Inovasi Mohammad Hatta',
      text: `(1) Mohammad Hatta lahir di Bukittinggi pada 12 Agustus 1902 dan menempuh pendidikan ekonomi di Handels Hoogeschool, Rotterdam. (2) Selama di Belanda, ia aktif memimpin Perhimpunan Indonesia yang gigih memperjuangkan kedaulatan tanah air. (3) Beliau meletakkan dasar ekonomi kerakyatan melalui koperasi yang berazaskan kekeluargaan dan gotong royong. (4) Cara beliau mengelola waktu dan kecintaannya pada buku merupakan perpaduan karakter paling sempurna yang pernah dimiliki oleh seorang pemimpin bangsa. (5) Pada tahun 1956, Hatta memutuskan mengundurkan diri dari jabatan Wakil Presiden RI karena perbedaan prinsip tata kelola negara.`
    },
    prompt: 'Dalam kutipan teks biografi di atas, kalimat yang mengandung unsur OPINI subjektif penulis teks adalah kalimat nomor...',
    pgOptions: [
      { key: 'A', text: '(1)' },
      { key: 'B', text: '(2)' },
      { key: 'C', text: '(3)' },
      { key: 'D', text: '(4)' },
      { key: 'E', text: '(5)' }
    ],
    pgCorrectAnswer: 'D',
    explanation: {
      coreConcept: 'Pemilahan Fakta dan Opini dalam Teks Biografi',
      analysis: 'Kalimat (4) memuat frasa evaluatif subjektif: "merupakan perpaduan karakter paling sempurna yang pernah dimiliki oleh seorang pemimpin bangsa". Kata "paling sempurna" merupakan penilaian pribadi/opini penulis yang sarat pandangan subjektif dan tidak dapat diverifikasi secara mutlak seperti data faktual.\n\nKalimat (1), (2), (3), dan (5) semuanya memuat FAKTA empiris historis (tanggal lahir, nama institusi, organisasi, konsep koperasi, dan tahun pengunduran diri).',
      distractorAnalysis: 'Siswa kelas XII IPA harus teliti mendeteksi kata-kata bernuansa superlativitas ("paling sempurna", "terhebat", "sungguh mempesona") yang menandai opini.'
    }
  },
  {
    id: 12,
    number: 12,
    topic: 'Teks Prosedur',
    type: 'pg',
    difficulty: 'Sedang-Sulit',
    contextTag: 'Mengurutkan Teks Prosedur Kronologis',
    readingPassage: {
      title: 'Prosedur Penerbitan Nomor Induk Berusaha (NIB) bagi Usaha Mikro',
      text: `Perhatikan langkah-langkah acak pendaftaran NIB melalui sistem Online Single Submission (OSS) berikut:\n(1) Mengisi kelengkapan data pelaku usaha, modal usaha, dan Klasifikasi Baku Lapangan Usaha Indonesia (KBLI) 5 digit yang sesuai.\n(2) Membuat akun hak akses di portal OSS dengan memasukkan NIK dan alamat pos-el aktif.\n(3) Mengunduh dan mencetak dokumen Nomor Induk Berusaha (NIB) yang telah terbit secara otomatis.\n(4) Melakukan verifikasi aktivasi akun melalui tautan konfirmasi yang dikirimkan sistem ke pos-el pemohon.\n(5) Memeriksa draf pernyataan mandiri terkait standar kepatuhan lingkungan dan keselamatan kerja, lalu menyetujuinya.`
    },
    prompt: 'Urutan kronologis yang paling tepat dan logis agar langkah-langkah di atas membentuk teks prosedur yang koheren adalah...',
    pgOptions: [
      { key: 'A', text: '(2) - (1) - (4) - (5) - (3)' },
      { key: 'B', text: '(2) - (4) - (1) - (5) - (3)' },
      { key: 'C', text: '(1) - (2) - (4) - (3) - (5)' },
      { key: 'D', text: '(4) - (2) - (1) - (5) - (3)' },
      { key: 'E', text: '(2) - (4) - (5) - (1) - (3)' }
    ],
    pgCorrectAnswer: 'B',
    explanation: {
      coreConcept: 'Urutan Kronologis Teks Prosedur (SOP Berbasis Sistem)',
      analysis: 'Alur logis pendaftaran akun dan perizinan OSS:\nLangkah awal: Membuat akun dengan NIK dan pos-el (2) -> Melakukan aktivasi akun melalui tautan verifikasi yang dikirim ke pos-el (4) -> Setelah akun aktif, masuk ke sistem dan mengisi data profil serta KBLI usaha (1) -> Melakukan peninjauan dan menyetujui pernyataan mandiri kepatuhan (5) -> Tahap akhir mengunduh/mencetak sertifikat NIB yang terbit (3).\nMaka urutan tepat: (2) - (4) - (1) - (5) - (3).',
      distractorAnalysis: 'Opsi A salah karena pengisian KBLI tidak dapat dilakukan sebelum aktivasi akun (4). Opsi E salah menempatkan persetujuan sebelum pengisian data usaha.'
    }
  },
  {
    id: 13,
    number: 13,
    topic: 'Kata Serapan',
    type: 'pg',
    difficulty: 'Sedang-Sulit',
    contextTag: 'Kata Serapan Bahasa Belanda dalam Bidang Finansial & Hukum',
    prompt: 'Banyak istilah administrasi, hukum dagang, dan bisnis di Indonesia yang diserap dari bahasa Belanda melalui jalur adaptasi fonetis. Pasangan kata serapan berikut yang KEDUANYA berasal dari bahasa BELANDA adalah...',
    pgOptions: [
      { key: 'A', text: 'faktur dan kuitansi' },
      { key: 'B', text: 'musyawarah dan laba' },
      { key: 'C', text: 'mentega dan bendera' },
      { key: 'D', text: 'swasta dan nirlaba' },
      { key: 'E', text: 'manajemen dan profit' }
    ],
    pgCorrectAnswer: 'A',
    explanation: {
      coreConcept: 'Etimologi Kata Serapan Bahasa Belanda',
      analysis: 'Pembagian asal bahasa:\n- "Faktur" diserap dari bahasa Belanda (factuur), dan "kuitansi" dari Belanda (kwitantie). Pasangan ini keduanya berasal dari bahasa Belanda.\n\nAnalisis opsi lain:\n- "Musyawarah" berasal dari bahasa Arab (musyāwarah), "laba" dari Sanskerta (lābha).\n- "Mentega" (manteiga) dan "bendera" (bandeira) berasal dari bahasa Portugis.\n- "Swasta" (swastha) dan "nirlaba" (nir- + lābha) berasal dari bahasa Sanskerta.\n- "Manajemen" (management) dan "profit" (profit) berasal dari bahasa Inggris.',
      distractorAnalysis: 'Pengecoh C berasal dari Portugis, D dari Sanskerta, B campuran Arab-Sanskerta, E dari Inggris.'
    }
  },
  {
    id: 14,
    number: 14,
    topic: 'Tanda Petik',
    type: 'pg_kompleks',
    difficulty: 'Sedang-Sulit',
    contextTag: 'Ketepatan Penggunaan Tanda Petik Tunggal dan Ganda',
    prompt: 'Manakah kalimat-kalimat berikut yang menggunakan tanda petik tunggal atau ganda secara TEPAT sesuai Pedoman EYD V? (Pilih 2 atau lebih jawaban yang benar)',
    pgKompleksOptions: [
      { id: 'optA', text: 'Ketua tim menyatakan, "Kita harus segera menuntaskan \'feasibility study\' sebelum mengajukan proposal ke inkubator bisnis."' },
      { id: 'optB', text: 'Pak Lurah mengingatkan, "Hati-hati terhadap calo yang mengaku bisa mempercepat izin usaha."' },
      { id: 'optC', text: 'Istilah download dipadankan dalam bahasa Indonesia menjadi "unduh".' },
      { id: 'optD', text: 'Siswa itu bertanya, "Apakah bapak mendengar bunyi \'klik\' saat sakelar ditekan?"' },
      { id: 'optE', text: 'Buku \'Pengantar Kewirausahaan Modern\' itu sangat diminati oleh mahasiswa.' }
    ],
    pgKompleksCorrectAnswers: ['optB', 'optD'],
    explanation: {
      coreConcept: 'Kaidah Penulisan Tanda Petik Tunggal dan Ganda (EYD V)',
      analysis: 'Analisis kalimat:\n- optB BENAR: Tanda petik ganda mengapit petikan langsung ujaran Pak Lurah.\n- optD BENAR: Tanda petik ganda mengapit petikan langsung, sedangkan tanda petik tunggal mengapit tiruan bunyi \'klik\' yang berada di dalam petikan langsung tersebut (petikan dalam petikan).\n\nAnalisis kesalahan opsi lain:\n- optA SALAH: Istilah asing "feasibility study" di dalam petikan seharusnya dicetak miring (huruf miring), bukan tanda petik tunggal, karena bukan petikan di dalam petikan dan bukan terjemahan makna kata.\n- optC SALAH: Padanan kata atau terjemahan kata asing harus menggunakan tanda petik tunggal: download \'unduh\', bukan tanda petik ganda.\n- optE SALAH: Judul buku wajib dicetak miring, bukan tanda petik tunggal.',
      distractorAnalysis: 'Kerap kali siswa keliru mengira istilah asing diapit petik tunggal. Kaidah EYD V menegaskan istilah asing dicetak miring, sedangkan terjemahan maknanya diapit petik tunggal.'
    }
  },
  {
    id: 15,
    number: 15,
    topic: 'Presentasi Bisnis',
    type: 'benar_salah',
    difficulty: 'Sedang-Sulit',
    contextTag: 'Etika & Prinsip Komunikasi Presentasi Bisnis',
    prompt: 'Tentukan kebenaran dari pernyataan-pernyataan berikut mengenai etika dan strategi komunikasi dalam presentasi bisnis di hadapan audiens!',
    statements: [
      {
        id: 'pb1',
        statement: 'Membuka presentasi bisnis dengan merendahkan kualitas produk kompetitor secara eksplisit merupakan cara efektif membangun keunggulan produk sendiri.',
        correctAnswer: false
      },
      {
        id: 'pb2',
        statement: 'Menyajikan data proyeksi keuangan dengan menyertakan asumsi rasional serta mengakui risiko pasar secara jujur mencerminkan integritas wirausahawan.',
        correctAnswer: true
      },
      {
        id: 'pb3',
        statement: 'Melakukan kontak mata merata ke seluruh penjuru ruangan audiens dapat menciptakan keterhubungan emosional dan menunjukkan kepercayaan diri pemateri.',
        correctAnswer: true
      }
    ],
    explanation: {
      coreConcept: 'Etika Bisnis dan Komunikasi Publik',
      analysis: 'Pernyataan 1 SALAH: Merendahkan pesaing (bad-mouthing competitors) adalah pelanggaran berat etika presentasi bisnis yang menunjukkan ketidakdewasaan, memicu tuntutan hukum persaingan tidak sehat, serta menurunkan simpati investor. Wirausahawan harus fokus pada Unique Selling Proposition (USP) produknya sendiri.\nPernyataan 2 BENAR: Investor berpengalaman selalu mencari transparansi data dan pemahaman pendiri bisnis atas risiko pasar serta asumsi finansial yang mendasarinya.\nPernyataan 3 BENAR: Eye contact yang seimbang mendistribusikan atensi, menghargai hadirin, dan memancarkan wibawa profesional pembicara.'
    }
  },
  {
    id: 16,
    number: 16,
    topic: 'Teks Prosedur',
    type: 'pg',
    difficulty: 'Sedang-Sulit',
    contextTag: 'Kebahasaan Teks Prosedur - Konjungsi & Verba',
    readingPassage: {
      title: 'Standardisasi Higienitas Pembuatan Selai Buah Lokal',
      text: `(1) Cuci bersih buah stroberi menggunakan air mengalir yang telah teruji bebas klorin. (2) Tiriskan buah hingga benar-benar kering sebelum dihaluskan dengan blender berkecepatan sedang. (3) Selanjutnya, tuangkan bubur buah ke dalam wajan nirkarat dan tambahkan gula pasir dengan perbandingan 2:1. (4) Aduk adonan secara merata hingga mengental dan mencapai titik didih optimal. (5) Terakhir, tuangkan selai panas ke dalam toples kaca yang telah disterilkan, lalu tutup rapat saat suhu telah hangat kuku.`
    },
    prompt: 'Berdasarkan teks prosedur di atas, kata yang berfungsi sebagai penanda konjungsi temporal antarkalimat dan verba material berturut-turut ditunjukkan oleh...',
    pgOptions: [
      { key: 'A', text: '"Sebelum" dan "mengalir"' },
      { key: 'B', text: '"Selanjutnya" dan "tuangkan"' },
      { key: 'C', text: '"Higienitas" dan "tiriskan"' },
      { key: 'D', text: '"Mencapai" dan "terakhir"' },
      { key: 'E', text: '"Secara merata" dan "hangat kuku"' }
    ],
    pgCorrectAnswer: 'B',
    explanation: {
      coreConcept: 'Kaidah Kebahasaan Teks Prosedur',
      analysis: '- Konjungsi temporal antarkalimat adalah kata hubung yang menandai kelanjutan urutan waktu antar-tahap tindakan, seperti "Selanjutnya" pada awal kalimat (3) dan "Terakhir" pada awal kalimat (5).\n- Verba material adalah kata kerja yang menunjukkan tindakan fisik teramati yang dilakukan oleh subjek, seperti "tuangkan", "cuci", "tiriskan", "aduk".\nOleh karena itu, pasangan "Selanjutnya" (konjungsi temporal) dan "tuangkan" (verba material tindakan) adalah pasangan yang tepat.',
      distractorAnalysis: 'Opsi A: "sebelum" adalah konjungsi temporal intrakalimat, sedangkan "mengalir" adalah verba proses/keadaan. Opsi C: "higienitas" adalah nomina kata benda abstrak.'
    }
  },
  {
    id: 17,
    number: 17,
    topic: 'Kata Serapan',
    type: 'pg',
    difficulty: 'Sedang-Sulit',
    contextTag: 'Kata Serapan Terjemahan vs Kreasi',
    prompt: 'Dalam pemerkayaan kosakata bahasa Indonesia era modern, penyerapan dilakukan melalui proses penerjemahan (pungutan) dan kreasi konsep. Pasangan istilah teknologi informasi berikut yang terbentuk melalui proses PENERJEMAHAN LANGSUNG yang tepat adalah...',
    pgOptions: [
      { key: 'A', text: 'download -> unduh dan upload -> unggah' },
      { key: 'B', text: 'online -> daring dan offline -> luring' },
      { key: 'C', text: 'mouse -> tetikus dan spare part -> suku cadang' },
      { key: 'D', text: 'selfie -> swafoto dan podcast -> siniar' },
      { key: 'E', text: 'hotspot -> sarang hangat dan link -> rantai' }
    ],
    pgCorrectAnswer: 'C',
    explanation: {
      coreConcept: 'Perbedaan Serapan Penerjemahan vs Kreasi/Akronim',
      analysis: '1. Penerjemahan (Pungutan Konsep Makna 1:1): Mengambil konsep kata asing dan mencari padanan leksikal yang semakna secara harfiah/konsep dalam bahasa Indonesia:\n   - mouse -> tetikus (tikus tiruan kecil)\n   - spare part -> suku cadang\n   - pilot project -> proyek percontohan\n   - transparent -> tembus pandang / bening\n2. Kreasi (Pembentukan Istilah Baru & Akronim): Menciptakan bentuk bentukan baru atau akronim khas bahasa Indonesia:\n   - online -> dalam jaringan (daring)\n   - offline -> luar jaringan (luring)\n   - selfie -> swafoto (menggunakan imbuhan sanskerta swa-)\n   - podcast -> siniar (siaran siar).\nPasangan pada opsi C merupakan penerjemahan murni tanpa singkatan/akronim.',
      distractorAnalysis: 'Daring, luring, swafoto, dan siniar tergolong istilah kreasi/akronim inovatif, bukan sekadar penerjemahan langsung kata per kata.'
    }
  },
  {
    id: 18,
    number: 18,
    topic: 'Skimming & Scanning',
    type: 'pg',
    difficulty: 'Sedang-Sulit',
    contextTag: 'Scanning untuk Menemukan Data Spesifik Teks Biografi',
    readingPassage: {
      title: 'Rekam Jejak Prof. Dr. Ing. B.J. Habibie',
      text: `Pada tahun 1955, B.J. Habibie memulai studi teknik penerbangan di Rheinisch-Westfälische Technische Hochschule (RWTH) Aachen, Jerman Barat. Gelar Diplom-Ingenieur diraihnya pada tahun 1960 dengan predikat sempurna. Lima tahun berselang, tepatnya pada 1965, beliau menuntaskan studi doktor ingenieur di kampus yang sama. Atas prestasinya memecahkan fenomena kelelahan struktur pesawat, maskapai penerbangan Messerschmitt-Bölkow-Blohm (MBB) di Hamburg mendapuknya sebagai Wakil Presiden Bidang Teknologi pada 1974 sebelum Presiden Soeharto memanggilnya pulang ke tanah air pada tahun yang sama.`
    },
    prompt: 'Berdasarkan teknik scanning (memindai informasi spesifik), di kota manakah maskapai penerbangan tempat B.J. Habibie menjabat sebagai Wakil Presiden Bidang Teknologi berpusat?',
    pgOptions: [
      { key: 'A', text: 'Aachen' },
      { key: 'B', text: 'Parepare' },
      { key: 'C', text: 'Hamburg' },
      { key: 'D', text: 'Berlin' },
      { key: 'E', text: 'Munich' }
    ],
    pgCorrectAnswer: 'C',
    explanation: {
      coreConcept: 'Aplikasi Teknik Scanning pada Teks Biografi',
      analysis: 'Langkah scanning:\n1. Tentukan target: nama maskapai "Messerschmitt-Bölkow-Blohm (MBB)" atau jabatan "Wakil Presiden Bidang Teknologi".\n2. Sapukan pandangan mencari kata kunci MBB di akhir paragraf.\n3. Temukan frase penjelas tempat: "...maskapai penerbangan Messerschmitt-Bölkow-Blohm (MBB) di Hamburg mendapuknya..."\nMaka kota tempat maskapai tersebut berpusat adalah Hamburg.',
      distractorAnalysis: 'Aachen adalah kota tempat beliau menempuh studi sarjana dan doktoral di RWTH Aachen, bukan lokasi kantor MBB. Parepare adalah tempat lahir beliau.'
    }
  },
  {
    id: 19,
    number: 19,
    topic: 'Tanda Petik',
    type: 'pg',
    difficulty: 'Sedang-Sulit',
    contextTag: 'Analisis Koreksi Kesalahan Tanda Petik Teks Kewirausahaan',
    prompt: 'Bacalah kalimat berikut:\nManajer pemasaran itu berkata, "Kami baru saja meluncurkan kampanye bertajuk \'Karya Anak Bangsa\', yang berarti \'produk unggulan buatan perajin lokal\'."\n\nPenilaian yang paling tepat mengenai penggunaan tanda baca pada kalimat di atas menurut kaidah EYD V adalah...',
    pgOptions: [
      { key: 'A', text: 'Salah, karena tanda petik ganda tidak boleh dipadukan dengan tanda petik tunggal dalam satu kalimat' },
      { key: 'B', text: 'Benar, karena tanda petik tunggal dipakai mengapit judul program di dalam petikan langsung dan mengapit penjelasan makna ungkapan' },
      { key: 'C', text: 'Salah, karena frasa "produk unggulan buatan perajin lokal" seharusnya memakai tanda petik ganda' },
      { key: 'D', text: 'Salah, karena tanda koma di akhir ucapan seharusnya diletakkan di luar tanda petik ganda' },
      { key: 'E', text: 'Salah, karena kata \'Karya Anak Bangsa\' seharusnya dicetak tebal tanpa tanda petik apapun' }
    ],
    pgCorrectAnswer: 'B',
    explanation: {
      coreConcept: 'Kaidah Tanda Petik Tunggal dalam Petikan Langsung (EYD V)',
      analysis: 'Mari kita teliti struktur kalimat:\n1. Petikan langsung ucapan manajer diapit tanda petik ganda: "Kami baru saja..."\n2. Di dalam petikan tersebut, ada judul tajuk kampanye \'Karya Anak Bangsa\' yang diapit tanda petik tunggal karena berada di dalam petikan langsung (petikan dalam petikan).\n3. Terdapat penjelasan makna: yang berarti \'produk unggulan buatan perajin lokal\', yang diapit tanda petik tunggal sesuai fungsi mengapit penjelasan makna atau terjemahan.\n4. Tanda titik penutup diletakkan sebelum tanda petik ganda penutup.\nSemua aturan EYD V dipenuhi secara sempurna, sehingga kalimat tersebut BENAR.',
      distractorAnalysis: 'Banyak siswa beranggapan petik tunggal dan ganda tidak boleh berdekatan, padahal justru inilah fungsi sintaksis tanda petik tunggal.'
    }
  },
  {
    id: 20,
    number: 20,
    topic: 'Presentasi Bisnis',
    type: 'pg',
    difficulty: 'Sedang-Sulit',
    contextTag: 'Analisis Ukuran Pasar (TAM, SAM, SOM) dalam Presentasi',
    prompt: 'Dalam presentasi bisnis di hadapan calon pemodal ventura, tim wirausaha siswa memaparkan ukuran pasar produk tas daur ulang serat nanas dengan data:\n- Total populasi konsumen produk fesyen ramah lingkungan di Indonesia (TAM)\n- Porsi pasar yang dapat dijangkau oleh kanal distribusi daring mereka saat ini (SAM)\n- Target pangsa pasar riil yang realistis dikuasai dalam kurun waktu 12 bulan ke depan (SOM)\n\nFungsi utama penyajian data pasar (Market Sizing) yang terperinci ini dalam konteks kewirausahaan adalah...',
    pgOptions: [
      { key: 'A', text: 'Menunjukkan kepada investor bahwa bisnis tidak akan pernah memiliki kompetitor sama sekali' },
      { key: 'B', text: 'Meyakinkan investor mengenai potensi pertumbuhan finansial serta kelayakan skala ekonomis bisnis secara rasional' },
      { key: 'C', text: 'Memenuhi formalitas durasi waktu presentasi agar tidak selesai lebih cepat dari jadwal' },
      { key: 'D', text: 'Mengalihkan perhatian juri dari kelemahan kualitas bahan baku serat nanas' },
      { key: 'E', text: 'Meminta investor mengambil alih seluruh pengelolaan operasional harian perusahaan' }
    ],
    pgCorrectAnswer: 'B',
    explanation: {
      coreConcept: 'Market Sizing dalam Pitch Deck Bisnis',
      analysis: 'Total Addressable Market (TAM), Serviceable Addressable Market (SAM), dan Serviceable Obtainable Market (SOM) adalah metrik fundamental dalam presentasi bisnis untuk membuktikan bahwa peluang pasar cukup besar, ada permintaan nyata, dan target penjualan 1 tahun ke depan dihitung secara realistis sehingga menjanjikan return on investment (ROI) bagi pemodal.',
      distractorAnalysis: 'Klaim "tidak memiliki kompetitor" (A) adalah kesalahan fatal di mata investor yang menandakan minim riset. C, D, dan E tidak relevan dengan esensi bisnis.'
    }
  },

  // ==========================================
  // SOAL 21 - 30: TINGKAT SULIT / HOTS
  // ==========================================
  {
    id: 21,
    number: 21,
    topic: 'Biografi',
    type: 'pg',
    difficulty: 'Sulit',
    contextTag: 'Analisis Struktur & Makna Reorientasi Biografi Tokoh Sains',
    readingPassage: {
      title: 'Dedikasi Sang Penjaga Keanekaragaman Hayati',
      text: `Menghabiskan lebih dari empat dekade meneliti flora tropis di hutan pedalaman Kalimantan, Profesor M. Kasim membuktikan bahwa sains bukan sekadar teori laboratorium di menara gading. Ketika tawaran riset dengan honor puluhan ribu dolar di universitas luar negeri berdatangan, ia memilih menetap di stasiun riset sederhana guna mendampingi masyarakat adat memetakan tanaman obat endemik. Baginya, kedaulatan riset nasional adalah harga diri peradaban. Kini, herbarium yang didirikannya menjadi rujukan taksonomi botani dunia. Warisan terbesarnya bukanlah tumpukan piagam penghargaan, melainkan generasi muda peneliti lokal yang memiliki kepedulian tulus terhadap kelestarian ekosistem rimba nusantara.`
    },
    prompt: 'Berdasarkan kutipan teks di atas, bagian teks tersebut tergolong ke dalam struktur REORIENTASI karena...',
    pgOptions: [
      { key: 'A', text: 'Memuat pengenalan awal mengenai latar belakang silsilah keluarga, tanggal lahir, dan masa kecil tokoh' },
      { key: 'B', text: 'Berisi kronologi peristiwa konflik fisik tokoh saat menghadapi ancaman perambahan hutan liar' },
      { key: 'C', text: 'Menyajikan pandangan kesimpulan, penilaian akhir, dan refleksi filosofis penulis terhadap kontribusi abadi serta keteladanan sang tokoh' },
      { key: 'D', text: 'Mendata klasifikasi latin ribuan tanaman obat secara sistematis untuk keperluan penerbitan jurnal' },
      { key: 'E', text: 'Menjelaskan langkah-langkah prosedural cara mendirikan laboratorium botani modern di daerah terpencil' }
    ],
    pgCorrectAnswer: 'C',
    explanation: {
      coreConcept: 'Fungsi Struktur Reorientasi dalam Teks Biografi (HOTS)',
      analysis: 'Struktur teks biografi terdiri dari:\n1. Orientasi: Pengenalan tokoh, latar belakang keluarga, pendidikan dasar.\n2. Peristiwa dan Masalah: Rangkaian kejadian hidup, perjuangan, rintangan, dan capaian karier tokoh.\n3. Reorientasi (Penutup): Berisi evaluasi menyeluruh, refleksi moral, simpulan penulis mengenai makna hidup tokoh, serta dampak warisan keteladanannya bagi masyarakat luas.\nKalimat "Warisan terbesarnya bukanlah tumpukan piagam penghargaan, melainkan generasi muda peneliti lokal..." secara gamblang merupakan refleksi evaluatif dan penutup filosofis (Reorientasi).',
      distractorAnalysis: 'Opsi A adalah ciri Orientasi. Opsi B adalah Peristiwa/Masalah. Opsi D dan E tidak relevan dengan teks biografi naratif.'
    }
  },
  {
    id: 22,
    number: 22,
    topic: 'Skimming & Scanning',
    type: 'pg',
    difficulty: 'Sulit',
    contextTag: 'Analisis Situasi Metodologi Membaca Ilmiah',
    prompt: 'Seorang peneliti muda SMA IPA sedang menelusuri 12 jurnal ilmiah untuk menyusun latar belakang karya ilmiah tentang sintesis bioplastik. Ia memiliki tenggat waktu 15 menit untuk: (1) menyeleksi 3 jurnal yang paling relevan dengan tema bioplastik berbahan pati biji durian, lalu (2) menemukan persentase kekuatan tarik mekanis (tensile strength) tertinggi dari ketiga jurnal terpilih tersebut.\n\nKombinasi langkah membaca cepat yang paling efektif dan tepat sasaran adalah...',
    pgOptions: [
      { key: 'A', text: 'Menerapkan scanning pada seluruh 12 jurnal dari halaman pertama hingga terakhir, lalu melakukan skimming pada abstrak 3 jurnal terpilih' },
      { key: 'B', text: 'Menerapkan skimming pada judul dan abstrak ke-12 jurnal untuk menyeleksi 3 jurnal relevan, kemudian menerapkan scanning mencari simbol satuan megapascal (MPa) atau persentase angka kekuatan tarik' },
      { key: 'C', text: 'Membaca secara intensif baris demi baris ke-12 jurnal secara berurutan tanpa menggunakan kata kunci' },
      { key: 'D', text: 'Melakukan skimming pada bagian daftar pustaka seluruh jurnal, dilanjutkan membaca santai bagian kesimpulan' },
      { key: 'E', text: 'Menggunakan scanning hanya untuk mencari nama penulis jurnal tanpa menelaah variabel penelitian' }
    ],
    pgCorrectAnswer: 'B',
    explanation: {
      coreConcept: 'Integrasi Prosedural Skimming dan Scanning dalam Riset Ilmiah (HOTS)',
      analysis: 'Dalam penelusuran literatur ilmiah berbatas waktu ketat:\nLangkah 1 (Menyeleksi relevansi topik umum): Memerlukan SKIMMING cepat pada judul, kata kunci, dan abstrak (abstract) ke-12 artikel guna menyaring gagasan pokok wacana.\nLangkah 2 (Menemukan data spesifik numerik kekuatan tarik): Memerlukan SCANNING terarah dengan menargetkan kata kunci spesifik "tensile strength", satuan "MPa", atau simbol "%" pada tabel hasil penelitian di 3 jurnal terpilih.\nKombinasi Skimming -> Scanning adalah alur paling logis dan efisien.',
      distractorAnalysis: 'Opsi A terbalik: melakukan scanning pada 12 jurnal tanpa mengetahui relevansi akan membuang waktu. Opsi C memakan waktu berjam-jam.'
    }
  },
  {
    id: 23,
    number: 23,
    topic: 'Kata Serapan',
    type: 'pg_kompleks',
    difficulty: 'Sulit',
    contextTag: 'Analisis Multibahasa Kata Serapan Teks Kewirausahaan',
    prompt: 'Bacalah petikan proposal bisnis berikut dengan cermat:\n"Perusahaan rintisan ini berkomitmen mengoptimalkan musyawarah kerja internal, menjunjung asas akuntabilitas, memanfaatkan teknologi internet guna memperluas lelang produk kerajinan, serta memperkuat swadaya masyarakat desa."\n\nIdentifikasilah klasifikasi asal bahasa kata serapan dalam kutipan di atas yang BENAR! (Pilih 2 atau lebih jawaban yang benar)',
    pgKompleksOptions: [
      { id: 'k1', text: 'Kata "musyawarah" diserap dari bahasa Arab' },
      { id: 'k2', text: 'Kata "akuntabilitas" diserap dan diadaptasi dari bahasa Belanda' },
      { id: 'k3', text: 'Kata "lelang" diserap dari bahasa Portugis' },
      { id: 'k4', text: 'Kata "swadaya" diserap dari bahasa Sanskerta' },
      { id: 'k5', text: 'Kata "internet" diserap melalui proses penerjemahan murni' }
    ],
    pgKompleksCorrectAnswers: ['k1', 'k3', 'k4'],
    explanation: {
      coreConcept: 'Etimologi Komparatif Lintas Bahasa Kata Serapan',
      analysis: 'Pembuktian etimologis:\n- k1 BENAR: "musyawarah" (musyāwarah) berasal dari bahasa Arab.\n- k3 BENAR: "lelang" (leilão) diserap dari bahasa Portugis (seperti halnya meja, jendela, sepatu, serdadu, mentega).\n- k4 BENAR: "swadaya" terbentuk dari morfem Sanskerta "swa-" (sendiri) dan "daya" (kekuatan).\n\nAnalisis pilihan salah:\n- k2 SALAH: "akuntabilitas" diserap dari bahasa Inggris "accountability" melalui adaptasi akhiran -ity menjadi -itas, bukan dari bahasa Belanda (Belanda: verantwoording / aansprakelijkheid).\n- k5 SALAH: "internet" adalah kata serapan proses ADOPSI utuh bentuk dan ejaannya, bukan penerjemahan.',
      distractorAnalysis: 'Akhiran serapan bahasa Inggris: -ity -> -itas (validity -> validitas, accountability -> akuntabilitas). Jangan tertukar dengan akhiran bahasa Belanda.'
    }
  },
  {
    id: 24,
    number: 24,
    topic: 'Kata Serapan',
    type: 'pg',
    difficulty: 'Sulit',
    contextTag: 'Semantik Kata Serapan Adaptasi dalam Wacana Bisnis',
    prompt: 'Cermatilah kalimat berikut:\n"Agar tidak mengalami stagnasi di tengah disrupsi industri, manajemen wajib melakukan diversifikasi portofolio usaha dan memvalidasi kapabilitas operasional secara komprehensif."\n\nMakna kontekstual kata serapan "diversifikasi" dan "komprehensif" dalam kalimat di atas berturut-turut adalah...',
    pgOptions: [
      { key: 'A', text: 'Pengurangan biaya produksi; dilakukan secara mendadak' },
      { key: 'B', text: 'Penganekaragaman jenis usaha atau produk; bersifat menyeluruh dan meluas mencakup segala aspek' },
      { key: 'C', text: 'Penutupan lini bisnis yang merugi; hanya fokus pada bidang teknologi' },
      { key: 'D', text: 'Penggabungan dua perusahaan besar; dilakukan secara bertahap dan santai' },
      { key: 'E', text: 'Pemusatan kekuasaan pada satu divisi; didasarkan atas intuisi pemimpin semata' }
    ],
    pgCorrectAnswer: 'B',
    explanation: {
      coreConcept: 'Makna Semantik Kata Serapan Serapan Asing dalam KBBI V',
      analysis: '- "Diversifikasi" (serapan dari diversification) dalam ranah bisnis bermakna penganekaragaman bidang usaha, jenis investasi, atau variasi produk untuk membagi risiko pasar.\n- "Komprehensif" (serapan dari comprehensive) bermakna menyeluruh, luas dan lengkap, mampu menangkap atau mencakup ruang lingkup yang luas secara terpadu.\nMaka definisi pasangan yang tepat dan akurat adalah opsi B.',
      distractorAnalysis: 'Opsi A, C, D, dan E memberikan distorsi makna yang bertentangan dengan kaidah leksikal KBBI dan konteks wirausaha.'
    }
  },
  {
    id: 25,
    number: 25,
    topic: 'Tanda Petik',
    type: 'pg',
    difficulty: 'Sulit',
    contextTag: 'Analisis Kesalahan Tanda Baca Bertingkat EYD V',
    prompt: 'Cermatilah lima kalimat berikut yang memuat kutipan, istilah, dan judul karya:\n(1) Dosen penguji bertanya, "Apakah kamu sudah membaca artikel \'Dilema Bioetika pada Rekayasa Genetika\' di jurnal tempo hari?"\n(2) Pak Hamdan menegaskan, "Kita tidak boleh menjadi pemimpin yang \'lempar batu sembunyi tangan\' di saat krisis melanda."\n(3) Semboyan Bhinneka Tunggal Ika bermakna \'berbeda-beda tetapi tetap satu jua\'.\n(4) Dalam rapat itu Direktur Utama mengatakan, "Saya mendengar bisikan, "Proyek ini akan dibatalkan sepihak oleh klien.""\n(5) Sajak "Pahlawan Tak Dikenal" karya Toto Sudarto Bachtiar dibacakan dengan penuh penghayatan.\n\nKalimat yang mengandung KESALAHAN penggunaan tanda petik menurut kaidah EYD V adalah kalimat nomor...',
    pgOptions: [
      { key: 'A', text: '(1) dan (3)' },
      { key: 'B', text: '(2) dan (5)' },
      { key: 'C', text: '(4) saja' },
      { key: 'D', text: '(2) dan (4)' },
      { key: 'E', text: '(3) dan (5)' }
    ],
    pgCorrectAnswer: 'C',
    explanation: {
      coreConcept: 'Aturan Petikan di dalam Petikan (EYD V Pasal Tanda Petik Tunggal)',
      analysis: 'Analisis kalimat:\n- (1) BENAR: Judul artikel yang berada di dalam kalimat langsung wajib memakai tanda petik tunggal (\'...\') karena berada di dalam petikan ganda ("...").\n- (2) BENAR: Ungkapan kiasan khusus yang disematkan dalam petikan langsung dapat diapit petik tunggal.\n- (3) BENAR: Penjelasan terjemahan/makna frasa diapit tanda petik tunggal: \'berbeda-beda tetapi tetap satu jua\'.\n- (4) SALAH: Terdapat petikan di dalam petikan langsung. Bagian ujaran di dalam: "Proyek ini akan dibatalkan sepihak oleh klien" seharusnya diapit TANDA PETIK TUNGGAL (\'...\'), bukan tanda petik ganda lagi. Kalimat yang benar: Direktur Utama mengatakan, "Saya mendengar bisikan, \'Proyek ini akan dibatalkan sepihak oleh klien.\'"\n- (5) BENAR: Judul sajak/puisi diapit tanda petik ganda.\nJadi kalimat yang salah adalah kalimat (4) saja.',
      distractorAnalysis: 'Banyak peserta ujian mengira kalimat (1) atau (3) yang salah karena jarang menjumpai petik tunggal di kehidupan sehari-hari, padahal kalimat (4) melanggar kaidah hierarki petikan (nested quote).'
    }
  },
  {
    id: 26,
    number: 26,
    topic: 'Teks Prosedur',
    type: 'pg',
    difficulty: 'Sulit',
    contextTag: 'Evaluasi Koherensi & Kalimat Sumbang Teks Prosedur',
    readingPassage: {
      title: 'Protokol Uji Coba Prototipe Penjernih Air Tenaga Surya Mandiri',
      text: `(1) Rangkailah pipa fotokatalis dengan panel surya monokristalin berdaya 50 watt secara presisi.\n(2) Alirkan air sampel limbah organik dengan debit konstan 1 liter per menit ke dalam ruang penyinaran sinar ultraviolet.\n(3) Lakukan kalibrasi sensor turbiditas dan pH meter setiap sepuluh menit sekali untuk mencatat degradasi polutan.\n(4) Biaya pembuatan prototipe ini terbukti jauh lebih murah daripada alat filtrasi komersial buatan pabrik besar di ibu kota.\n(5) Kumpulkan air hasil keluaran akhir ke dalam bejana steril, lalu uji parameter Total Dissolved Solids (TDS) di laboratorium terakreditasi.`
    },
    prompt: 'Dalam teks prosedur kerja ilmiah di atas, kalimat yang TIDAK PADU (rancu/sumbang) sehingga harus dihilangkan agar teks prosedur tetap menjaga kesatuan langkah fungsional adalah kalimat nomor...',
    pgOptions: [
      { key: 'A', text: '(1)' },
      { key: 'B', text: '(2)' },
      { key: 'C', text: '(3)' },
      { key: 'D', text: '(4)' },
      { key: 'E', text: '(5)' }
    ],
    pgCorrectAnswer: 'D',
    explanation: {
      coreConcept: 'Koherensi dan Kesatuan Gagasan dalam Teks Prosedur Kompleks',
      analysis: 'Teks prosedur menuntut runtunan instruksi operasional yang kohesif dan koheren (kalimat imperatif/tindakan sistematis). Kalimat (1), (2), (3), dan (5) semuanya memuat tahapan verba operasional (rangkailah, alirkan, lakukan kalibrasi, kumpulkan).\nSebaliknya, kalimat (4) berisi opini perbandingan keunggulan harga dan biaya produksi (bersifat evaluasi komparatif bisnis), bukan instruksi langkah kerja teknis. Keberadaan kalimat (4) memutus alur kronologis tahapan uji coba sehingga tergolong kalimat sumbang.',
      distractorAnalysis: 'Siswa SMA IPA harus mampu memisahkan kalimat klaim pemasaran/opini biaya dari protokol teknis laboratorium.'
    }
  },
  {
    id: 27,
    number: 27,
    topic: 'Presentasi Bisnis',
    type: 'pg',
    difficulty: 'Sulit',
    contextTag: 'Studi Kasus Dilema Etika & Integritas Presentasi Bisnis',
    prompt: 'Sebuah tim inovasi siswa kelas XII mempresentasikan produk sabun antibakteri ekstrak kulit manggis di depan panelis investor. Saat sesi tanya jawab, seorang investor ahli biokimia menanyakan: "Apakah produk Anda sudah melewati uji iritasi dermatologis pada kulit manusia dan memiliki sertifikasi resmi BPOM?"\nPadahal pada kenyataannya, tim baru menyelesaikan uji daya hambat bakteri secara in-vitro di laboratorium sekolah dan belum melakukan uji klinis pada manusia.\n\nRespons yang paling beretika, profesional, dan mempertahankan integritas wirausaha adalah...',
    pgOptions: [
      { key: 'A', text: 'Menjawab secara tegas bahwa produk telah teruji aman 100% pada kulit manusia dan izin BPOM sedang dicetak agar investor langsung menaruh modal' },
      { key: 'B', text: 'Menyerang balik panelis dengan menyatakan bahwa uji laboratorium sekolah sudah lebih dari cukup dan tidak memerlukan sertifikasi BPOM yang berbelit-belit' },
      { key: 'C', text: 'Mengakui secara jujur bahwa tahap riset saat ini baru sampai pada uji in-vitro daya hambat bakteri, menjelaskan data positif hasil lab tersebut, serta memaparkan bahwa dana investasi yang diajukan justru akan dialokasikan untuk mendanai uji dermatologis dan sertifikasi BPOM' },
      { key: 'D', text: 'Pura-pura tidak mendengar pertanyaan tersebut lalu langsung membagikan sampel produk gratis kepada semua hadirin' },
      { key: 'E', text: 'Menyalahkan laboratorium kampus rekanan yang dianggap lambat memproses hasil uji klinis' }
    ],
    pgCorrectAnswer: 'C',
    explanation: {
      coreConcept: 'Etika Transparansi Data dan Penggunaan Dana (Use of Funds) dalam Presentasi',
      analysis: 'Dalam dunia kewirausahaan dan presentasi pendanaan (fundraising):\n1. Berbohong mengenai izin edar dan uji klinis (opsi A) adalah tindak penipuan (fraud) yang berkonsekuensi hukum perdata/pidana serta merusak reputasi seumur hidup.\n2. Bersikap defensif/arogan (opsi B) mencerminkan ketidaklayakan tokoh sebagai mitra bisnis.\n3. Pendekatan wirausaha sejati (opsi C): Bersikap transparan mengenai status traksi saat ini (uji in-vitro berhasil), lalu mengaitkan kelemahan tersebut dengan rencana penggunaan dana investasi (Use of Funds) untuk melangkah ke tahap sertifikasi klinis resmi. Ini menunjukkan transparansi, rencana matang, dan akuntabilitas tinggi.',
      distractorAnalysis: 'Opsi C mengubah celah risiko menjadi argumen kuat mengapa tim membutuhkan pendanaan saat ini.'
    }
  },
  {
    id: 28,
    number: 28,
    topic: 'Presentasi Bisnis',
    type: 'benar_salah',
    difficulty: 'Sulit',
    contextTag: 'Evaluasi Elemen Esensial Pitch Deck Kewirausahaan',
    prompt: 'Tentukan kebenaran dari pernyataan-pernyataan berikut mengenai komponen krusial slide presentasi bisnis (pitch deck)!',
    statements: [
      {
        id: 'pd1',
        statement: 'Slide "Business Model" (Model Bisnis) bertujuan utama menjelaskan bagaimana perusahaan menghasilkan pendapatan (revenue stream), struktur penetapan harga, dan proyeksi marjin keuntungan.',
        correctAnswer: true
      },
      {
        id: 'pd2',
        statement: 'Slide presentasi bisnis yang ideal sebaiknya memuat paragraf narasi panjang setebal minimal 200 kata per slide agar audiens dapat membaca seluruh analisis secara mandiri.',
        correctAnswer: false
      },
      {
        id: 'pd3',
        statement: 'Bagian "Traction" (Traksi) memaparkan bukti pencapaian nyata produk di pasar, seperti jumlah pengguna aktif, pertumbuhan penjualan, umpan balik positif pelanggan, atau kemitraan strategis.',
        correctAnswer: true
      }
    ],
    explanation: {
      coreConcept: 'Prinsip Desain & Muatan Konten Pitch Deck Bisnis',
      analysis: 'Pernyataan 1 BENAR: Business Model menjelaskan mesin monetisasi bisnis: dari mana uang masuk, berapa harga jual, dan berapa biaya operasional.\nPernyataan 2 SALAH: Kaidah presentasi visual yang efektif menganut prinsip "Slideuments are a crime" (aturan 10/20/30 Guy Kawasaki). Slide tidak boleh berjejal teks panjang (text-heavy). Slide berfungsi sebagai penguat visual bagi narasi pembicara, bukan dokumen bacaan mandiri.\nPernyataan 3 BENAR: Traksi (traction) adalah bukti validasi pasar paling berharga bagi investor yang membuktikan produk diminati konsumen nyata.'
    }
  },
  {
    id: 29,
    number: 29,
    topic: 'Biografi',
    type: 'pg',
    difficulty: 'Sulit',
    contextTag: 'Penalaran HOTS: Karakter Kewirausahaan Tokoh Biografi',
    readingPassage: {
      title: 'Menembus Batas: Perjuangan Nadiem Makarim Mengubah Transportasi',
      text: `Ketika merintis platform transportasi daring pada tahun 2010, Nadiem Makarim bermula dari sebuah pusat panggilan (call center) sederhana dengan hanya 20 orang pengemudi ojek pangkalan. Banyak kalangan meragukan model bisnis ini karena kebiasaan masyarakat yang terbiasa tawar-menawar secara konvensional di jalan. Namun, Nadiem melihat permasalahan asimetri informasi: para pengemudi ojek menghabiskan lebih dari 70% waktu kerjanya hanya untuk menunggu penumpang tanpa kepastian. Dengan memadukan teknologi algoritma pemetaan dan standardisasi tarif transparan, efisiensi waktu kerja pengemudi melonjak drastis. Penolakan dari berbagai pihak justru dijadikan umpan balik untuk memperbaiki protokol keamanan aplikasi.`
    },
    prompt: 'Berdasarkan kutipan biografi di atas, nilai karakter keteladanan kewirausahaan yang paling mendalam dan dapat diadopsi oleh siswa kelas XII dalam menghadapi tantangan zaman adalah...',
    pgOptions: [
      { key: 'A', text: 'Menghindari risiko usaha dengan menunggu investor asing menaruh modal terlebih dahulu' },
      { key: 'B', text: 'Kemampuan mengidentifikasi akar inefisiensi sosial di sekitarnya, berani mengambil risiko inovasi meski diragukan, serta mengubah kritik menjadi pemicu perbaikan mutu berkelanjutan' },
      { key: 'C', text: 'Mempertahankan metode konvensional demi menjaga tradisi tawar-menawar harga agar tidak tergerus teknologi' },
      { key: 'D', text: 'Menyerahkan penyelesaian masalah transportasi perkotaan sepenuhnya kepada regulasi birokrasi pemerintah tanpa inisiatif swasta' },
      { key: 'E', text: 'Memaksa seluruh pengemudi bekerja selama 24 jam nonstop guna mengejar target profit perusahaan semata' }
    ],
    pgCorrectAnswer: 'B',
    explanation: {
      coreConcept: 'Nilai Keteladanan dan Karakter Kewirausahaan dalam Biografi (HOTS)',
      analysis: 'Analisis teks menunjukkan esensi kewirausahaan sejati:\n1. Nadiem menemukan masalah nyata (pengemudi menganggur 70% waktu menunggu).\n2. Memiliki keberanian memulai dalam skala rintisan kecil meski diragukan publik.\n3. Sikap mental bertumbuh (growth mindset): menjadikan penolakan dan kritik bukan sebagai alasan mundur, melainkan bahan bakar umpan balik (feedback loop) untuk menyempurnakan standardisasi protokol layanan.\nHal ini dirangkum secara tepat pada opsi B.',
      distractorAnalysis: 'Opsi A, C, D, dan E bertentangan dengan semangat inovasi dan keteladanan teks nonfiksi biografi.'
    }
  },
  {
    id: 30,
    number: 30,
    topic: 'Kata Serapan',
    type: 'pg_kompleks',
    difficulty: 'Sulit',
    contextTag: 'Sintesis Kebahasaan EYD V: Koreksi Ejaan & Serapan Baku',
    prompt: 'Cermatilah naskah ringkasan bisnis berikut:\n"Guna meningkatkan produktifitas, manejemen mengadopsi sistim otomasi berbasis cloud computing untuk meminimalisir resiko human error."\n\nManakah bentuk kata baku sesuai Pedoman Umum Ejaan Bahasa Indonesia (EYD V) dan KBBI yang TEPAT untuk mengoreksi kata-kata yang salah pada teks di atas? (Pilih 2 atau lebih jawaban yang benar)',
    pgKompleksOptions: [
      { id: 'corr1', text: '"produktifitas" seharusnya diperbaiki menjadi "produktivitas"' },
      { id: 'corr2', text: '"manejemen" seharusnya diperbaiki menjadi "manajemen"' },
      { id: 'corr3', text: '"sistim" seharusnya diperbaiki menjadi "sistem"' },
      { id: 'corr4', text: '"meminimalisir" seharusnya diperbaiki menjadi "meminimalkan" atau "meminimalisasi"' },
      { id: 'corr5', text: '"resiko" seharusnya diperbaiki menjadi "resiko"' }
    ],
    pgKompleksCorrectAnswers: ['corr1', 'corr2', 'corr3', 'corr4'],
    explanation: {
      coreConcept: 'Kaidah Penyerapan Imbuhan dan Bentuk Baku Bahasa Indonesia (EYD V)',
      analysis: 'Kaidah penyerapan unsur asing:\n1. Akhiran -ity diserap menjadi -itas. Dari kata dasar "produktif", serapannya adalah "produktivitas" (bukan produktifitas).\n2. Diksi serapan Belanda/Inggris: management -> manajemen (bukan manejemen).\n3. Kata serapan Yunani/Inggris system -> sistem dengan vokal \'e\' (bukan sistim).\n4. Akhiran -isir merupakan serapan Belanda (-iseren) yang TIDAK BAKU dalam kaidah pembentukan kata kerja bahasa Indonesia modern. Bentuk baku untuk meminimalisir adalah "meminimalkan" (imbuhan me-kan) atau "meminimalisasi" (serapan minimalisatie -> minimalisasi).\n5. Bentuk baku dari resiko adalah "risiko" dengan vokal \'i\' (jadi opsi corr5 salah karena tetap menulis resiko).\nMaka pernyataan koreksi yang benar adalah corr1, corr2, corr3, dan corr4.',
      distractorAnalysis: 'Siswa sering terjebak memakai akhiran -isir (misal: meminimalisir, melokalisir, menjustifikasi -> menjustisir) padahal EYD V melarang pembentukan kata dengan akhiran -isir.'
    }
  }
];
