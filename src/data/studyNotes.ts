import { TopicCategory } from '../types/exam';

export interface StudyGuide {
  topic: TopicCategory;
  title: string;
  badge: string;
  summary: string;
  keyPoints: string[];
  rulesAndFormulas: {
    ruleTitle: string;
    description: string;
    goodExample: string;
    badExample: string;
  }[];
  quickExamTricks: string[];
}

export const STUDY_GUIDES: Record<TopicCategory, StudyGuide> = {
  'Biografi': {
    topic: 'Biografi',
    title: 'Hakikat & Kaidah Teks Biografi',
    badge: 'Materi A.1 - Kisi-kisi PSTS',
    summary: 'Teks biografi adalah teks narasi faktual nonfiksi yang mengisahkan perjalanan hidup seorang tokoh yang ditulis oleh orang lain dengan tujuan mentransfer nilai keteladanan, moral, dan inspirasi.',
    keyPoints: [
      'Struktur Baku: Orientasi (Pengenalan tokoh/latar belakang) -> Peristiwa Penting & Masalah (Puncak perjuangan/rintangan/solusi) -> Reorientasi (Simpulan evaluatif & refleksi pandangan penulis, bersifat opsional).',
      'Sudut Pandang: Menggunakan orang ketiga tunggal ("ia", "dia", "beliau", atau menyebut nama tokoh). Jika menggunakan "saya/aku", itu adalah Autobiografi.',
      'Membedakan Fakta vs Opini: Fakta teruji secara empiris (tahun, nama tempat, riwayat jabatan, piagam, peristiwa konkret). Opini memuat kata evaluatif subjektif ("sosok paling hebat", "sangat menawan", "karakter sempurna").',
      'Nilai Keteladanan: Karakter keteguhan, integritas, pengabdian nusa bangsa, resiliensi saat gagal, dan sikap pantang menyerah.'
    ],
    rulesAndFormulas: [
      {
        ruleTitle: 'Ciri Reorientasi (Penutup Simpulan)',
        description: 'Reorientasi berisi evaluasi atau pandangan akhir penulis terhadap signifikansi tokoh.',
        goodExample: '"Warisan terbesarnya bukan piagam penghargaan, melainkan generasi muda peneliti yang mencintai rimba Indonesia."',
        badExample: '"Pada tahun 1955 ia masuk ke RWTH Aachen untuk belajar teknik dirgantara." (Ini adalah bagian Peristiwa Penting, bukan Reorientasi).'
      },
      {
        ruleTitle: 'Objektivitas Narasi',
        description: 'Biografi harus berpegang pada fakta yang dapat diverifikasi, bukan hiperbola atau fiksi romantis.',
        goodExample: '"Mohammad Hatta mengundurkan diri dari jabatan Wakil Presiden pada 1 Desember 1956."',
        badExample: '"Hatta dipercaya sebagai manusia setengah dewa yang tak pernah berbuat salah sedikit pun."'
      }
    ],
    quickExamTricks: [
      'Cari kata penanda opini: "paling", "terbaik", "sungguh mempesona", "tiada tanding". Jika ada kata tersebut, kalimat itu OPINI.',
      'Jika soal menanyakan struktur Reorientasi, carilah paragraf terakhir yang memuat refleksi moral atau simpulan jasa tokoh.'
    ]
  },

  'Skimming & Scanning': {
    topic: 'Skimming & Scanning',
    title: 'Teknik Membaca Cepat (Skimming vs Scanning)',
    badge: 'Materi A.2 - Kisi-kisi PSTS',
    summary: 'Skimming (membaca layap) untuk menangkap ide pokok atau ikhtisar wacana. Scanning (membaca tatap/memindai) untuk menemukan informasi spesifik tanpa membaca bagian lain.',
    keyPoints: [
      'Skimming (Layap): Gerakan mata cepat melintasi judul, subjudul, kalimat pertama (deduktif) atau kalimat terakhir (induktif) tiap paragraf, serta kesimpulan bab.',
      'Scanning (Tatap): Pembaca sudah memiliki kata kunci (keyword) di kepala sebelum meluncurkan mata, lalu menyapu teks untuk mencari angka, nama tokoh, istilah khusus, atau data tabel.',
      'Hambatan Membaca Cepat yang Wajib Dihindari: Vokalisasi (gerak bibir bersuara), Subvokalisasi (membaca bersuara di dalam hati per kata), dan Regresi (mata melompat balik ke kata sebelumnya).',
      'Kombinasi Riset Ilmiah: Lakukan Skimming terlebih dahulu untuk menyeleksi artikel relevan, baru terapkan Scanning untuk mengutip angka eksperimen/persentase.'
    ],
    rulesAndFormulas: [
      {
        ruleTitle: 'Rumus Pembeda Utama',
        description: 'Tentukan tujuan membaca sebelum memilih teknik membaca cepat.',
        goodExample: 'Skimming = "Apa inti gagasan dari 5 halaman artikel ini?" | Scanning = "Tahun berapa Habibie lulus dari Aachen?"',
        badExample: 'Menerapkan scanning untuk menentukan apakah artikel bertema filsafat atau sains (Salah teknik! Harus Skimming).'
      }
    ],
    quickExamTricks: [
      'Kata Kunci Skimming: "ide pokok", "garis besar", "kesimpulan wacana", "topik umum", "tema artikel".',
      'Kata Kunci Scanning: "tahun berapa", "di kota mana", "berapa persen", "nomor telepon", "istilah spesifik".'
    ]
  },

  'Kata Serapan': {
    topic: 'Kata Serapan',
    title: 'Kaidah Penyerapan Kata Asing & Makna Bahasa Tertentu',
    badge: 'Materi A.3 & A.4 - Kisi-kisi PSTS',
    summary: 'Proses masuknya kosakata asing ke bahasa Indonesia meliputi: Adopsi (utuh), Adaptasi (penyesuaian ejaan/lafal), Terjemahan/Pungutan (mencari padanan konsep), dan Kreasi (akronim/istilah baru).',
    keyPoints: [
      'Adopsi: Bentuk dan ejaan 100% sama dengan bahasa asal (supermarket, mall, plaza, video, data, internet, bus).',
      'Adaptasi: Ejaan dan lafal disesuaikan dengan kaidah fonologis Indonesia (system -> sistem, quality -> kualitas, innovation -> inovasi, management -> manajemen).',
      'Terjemahan (Pungutan): Padanan makna konsep 1:1 (download -> unduh, upload -> unggah, mouse -> tetikus, spare part -> suku cadang, feedback -> balikan).',
      'Kreasi: Bentukan istilah atau akronim khas (online -> daring [dalam jaringan], offline -> luring, selfie -> swafoto, podcast -> siniar).'
    ],
    rulesAndFormulas: [
      {
        ruleTitle: 'Asal Usul Bahasa Tertentu',
        description: 'Kenali rumpun bahasa asal kata serapan yang sering diujikan di PSTS.',
        goodExample: 'Sanskerta: panca, swadaya, karya, wisuda, dasawarsa, mahasiswa | Arab: musyawarah, amanah, ikhlas, takdir, hikmah | Belanda: faktur, kuitansi, bengkel, kamar, koran | Portugis: lelang, mentega, kemeja, jendela, sepatu.',
        badExample: 'Menyebut "lelang" dari Belanda atau "musyawarah" dari Sanskerta (Tertukar!).'
      },
      {
        ruleTitle: 'Kaidah Akhiran Asing (EYD V & PUPI)',
        description: 'Akhiran -ity menjadi -itas. Huruf \'f\' pada kata dasar berubah menjadi \'v\' pada kata turunan.',
        goodExample: 'kreatif -> kreativitas | produktif -> produktivitas | efektif -> efektivitas | sistem (bukan sistim) | risiko (bukan resiko) | standardisasi (bukan standarisasi).',
        badExample: 'kreatifitas, produktifitas, sistim, resiko, standarisasi, meminimalisir.'
      }
    ],
    quickExamTricks: [
      'Hati-hati akhiran "-isir" (Belanda -iseren) seperti meminimalisir, melokalisir, menjustisir: INI TIDAK BAKU! Bentuk baku adalah meminimalkan/meminimalisasi, melokalisasi, menjustifikasi.',
      'Awalan Sanskerta serba megah/diri: swa- (sendiri), maha- (agung/besar), nir- (tanpa), panca- (lima), tri- (tiga).'
    ]
  },

  'Tanda Petik': {
    topic: 'Tanda Petik',
    title: 'Aturan Penggunaan Tanda Petik Tunggal & Ganda (EYD V)',
    badge: 'Materi A.5 - Kisi-kisi PSTS',
    summary: 'EYD V membedakan secara tegas fungsi tanda petik ganda ("...") dan tanda petik tunggal (\'...\'). Mengetahui kapan keduanya dipakai adalah salah satu soal penjebak favorit di ujian.',
    keyPoints: [
      'Tanda Petik Ganda ("..."):',
      '1. Mengapit petikan langsung dari pembicaraan atau bahan tertulis: "Saya belum siap," kata Ahmad.',
      '2. Mengapit judul puisi, judul lagu, judul artikel, naskah drama, bab buku, atau pidato: Sajak "Aku" karya Chairil Anwar; artikel bertajuk "Revolusi Hijau".',
      '3. Mengapit istilah ilmiah yang kurang dikenal atau kata bermakna khusus: Dilarang memakai celana "begi".',
      'Tanda Petik Tunggal (\'...\'):',
      '1. Mengapit petikan di dalam petikan langsung: Ibu berkata, "Dengarlah suara \'kring-kring\' dari sepeda adik."',
      '2. Mengapit makna, terjemahan, atau penjelasan kata/ungkapan asing atau daerah: feed back \'balikan\'; noken \'tas rajut khas Papua\'; retina \'dinding bola mata yang peka cahaya\'.'
    ],
    rulesAndFormulas: [
      {
        ruleTitle: 'Judul Buku vs Judul Artikel/Puisi',
        description: 'Buku, majalah, koran, dan film panjang dicetak MIRING. Artikel, puisi, lagu, dan bab buku diapit PETIK GANDA.',
        goodExample: 'Ia membaca novel Laskar Pelangi dan menelaah sajak "Pahlawan Tak Dikenal".',
        badExample: 'Ia membaca novel "Laskar Pelangi" dan menelaah sajak \'Pahlawan Tak Dikenal\'.'
      },
      {
        ruleTitle: 'Penjelasan Makna Harus Petik Tunggal',
        description: 'Jangan gunakan petik ganda untuk menjelaskan arti kata bahasa asing atau daerah!',
        goodExample: 'Kata download bermakna \'unduh\'.',
        badExample: 'Kata download bermakna "unduh".'
      }
    ],
    quickExamTricks: [
      'Ingat rumus: Luar = Petik Ganda ("..."), Dalam = Petik Tunggal (\'...\').',
      'Tanda titik (.) dan koma (,) penutup percakapan selalu berada di DALAM petik ganda ("..."), bukan di luar!'
    ]
  },

  'Teks Prosedur': {
    topic: 'Teks Prosedur',
    title: 'Hakikat, Kaidah Kebahasaan, & Urutan Kronologis Prosedur',
    badge: 'Materi B.1 & B.2 - Kisi-kisi PSTS',
    summary: 'Teks prosedur memandu pembaca mencapai tujuan spesifik melalui runtunan instruksi operasional yang kohesif, koheren, dan kronologis.',
    keyPoints: [
      'Struktur: Tujuan (Goal) -> Bahan & Alat (Material, opsional) -> Langkah-langkah (Steps) -> Penutup / Penegasan Ulang.',
      'Ciri Kebahasaan Utama:',
      '1. Kalimat Imperatif: Mengandung perintah, saran, atau larangan ("Siapkanlah", "Pastikan tidak ada kebocoran", "Jangan sentuh").',
      '2. Verba Material: Kata kerja tindakan fisik nyata ("memotong", "menekan", "mencampur", "menuang").',
      '3. Konjungsi Temporal: Kata hubung penanda sekuens waktu ("kemudian", "setelah itu", "selanjutnya", "terakhir").',
      'Jenis Prosedur: Prosedur Sederhana (2-3 langkah), Prosedur Kompleks (banyak tahapan bercabang dengan sub-langkah), Prosedur Protokol (langkah-langkah fleksibel urutannya tetapi tujuan tetap tercapai).'
    ],
    rulesAndFormulas: [
      {
        ruleTitle: 'Mengurutkan Kalimat Acak Menjadi Kronologis',
        description: 'Cari kalimat yang memuat inisiasi awal (registrasi/persiapan bahan), hubungkan dengan kata penunjuk atau pengulangan kata kunci, dan akhiri dengan tahapan hasil/output/pencetakan.',
        goodExample: 'Buat akun -> Verifikasi pos-el -> Masuk & isi data -> Setujui pernyataan mandiri -> Unduh sertifikat NIB.',
        badExample: 'Mengunduh NIB sebelum membuat akun atau sebelum verifikasi email.'
      }
    ],
    quickExamTricks: [
      'Untuk mendeteksi kalimat sumbang: carilah kalimat yang berisi opini perbandingan komersial, pujian berlebihan, atau keluhan biaya yang tidak berisi instruksi langkah kerja!'
    ]
  },

  'Presentasi Bisnis': {
    topic: 'Presentasi Bisnis',
    title: 'Etika Presentasi di Depan Audiens & Komponen Pitch Deck',
    badge: 'Materi B.3 & B.4 - Kisi-kisi PSTS',
    summary: 'Presentasi bisnis kewirausahaan menuntut etika komunikasi profesional, integritas data keuangan, serta struktur penyampaian solusi yang memikat minat investor.',
    keyPoints: [
      'Etika Komunikasi di Depan Audiens:',
      '1. Bahasa Tubuh Terbuka: Postur tegak, tangan terbuka, kontak mata merata ke seluruh ruangan.',
      '2. Menghadapi Kritik: Mendengarkan aktif tanpa menyela, mengapresiasi masukan, memberikan klarifikasi berbasis data faktual secara tenang.',
      '3. Menghargai Pesaing: DILARANG KERAS merendahkan atau menjelek-jelekkan kompetitor (bad-mouthing). Fokuslah pada Unique Value Proposition (UVP) produk sendiri.',
      '4. Integritas Data Finansial: Menyajikan data realistis, tidak memalsukan traksi atau omzet, transparan mengakui risiko.',
      'Elemen Wajib Pitch Deck Kewirausahaan:',
      '1. Problem (Masalah Nyata di Pasar)',
      '2. Solution & Value Proposition (Solusi Unik Produk)',
      '3. Market Size (TAM: Total Pasar, SAM: Pasar Terjangkau, SOM: Target 1 Tahun)',
      '4. Business Model (Model Monetisasi & Aliran Pendapatan)',
      '5. Traction (Bukti Penjualan/Uji Pengguna/Pertumbuhan Riil)',
      '6. The Ask / Use of Funds (Kebutuhan Alokasi Pendanaan Investasi)'
    ],
    rulesAndFormulas: [
      {
        ruleTitle: 'Prinsip Desain Slide',
        description: 'Hindari slide berjejal teks panjang (text-heavy). Gunakan infografik, visual kontras, dan poin ringkas.',
        goodExample: '1 ide per slide, grafik batang pertumbuhan pengguna, teks berukuran minimal 24pt.',
        badExample: 'Menyalin seluruh isi makalah proposal setebal 300 kata ke dalam satu slide proyektor.'
      }
    ],
    quickExamTricks: [
      'Jika investor menanyakan izin edar atau uji klinis yang belum ada, jangan berbohong! Tindakan benar adalah mengakui tahap riset saat ini dan menjelaskan bahwa dana investasi akan digunakan untuk mengurus sertifikasi tersebut.'
    ]
  }
};
