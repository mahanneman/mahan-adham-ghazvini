<html lang="fa" dir="rtl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>مقالات ISI</title>
    <link href="/styles/globals.css" rel="stylesheet">
    <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet">
    <style>
        .option-btn {
            transition: all 0.3s ease;
        }
        @media (max-width: 640px) {
            .options-container {
                flex-direction: column;
            }
            .option-btn {
                width: 100%;
                margin-bottom: 0.5rem;
            }
        }
    </style>
</head>
<body class="min-h-screen bg-background text-foreground">
    <nav class="bg-primary text-primary-foreground p-4">
        <ul class="flex justify-center space-x-4 rtl:space-x-reverse">
            <li><a href="/">خانه</a></li>
        </ul>
    </nav>

    <main class="pt-24 pb-16 px-4">
        <div class="max-w-5xl mx-auto">
            <div class="text-center mb-12">
                <h1 class="text-4xl font-bold mb-3 text-engineering-primary">
                    مقالات ISI
                </h1>
                <p class="text-muted-foreground">
                    مقالات منتخب در حوزه مهندسی حرارت و انرژی
                </p>
            </div>
            <div class="group p-8 cursor-pointer transition hover:shadow-2xl relative overflow-hidden card">
                <div class="flex items-start gap-4">
                    <div class="p-3 bg-engineering-primary/10 rounded-lg">
                        <svg class="w-6 h-6 text-engineering-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8l-6-6z"></path>
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 2v6h6"></path>
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 13H8m0-3h8m-8 6h8"></path>
                        </svg>
                    </div>
                    <div>
                        <h2 class="text-2xl font-bold text-engineering-primary mb-2">
                            Phase change material-based thermal energy storage
                        </h2>
                        <p class="text-sm text-muted-foreground italic">
                            ScienceDirect — 2021
                        </p>
                    </div>
                </div>
                <div class="absolute inset-0 bg-background/95 backdrop-blur opacity-0 group-hover:opacity-100 transition flex items-center justify-center p-8">
                    <p class="text-center leading-relaxed text-muted-foreground text-lg">
                        این مقاله مبانی انتقال حرارت در مواد تغییر فاز (PCM) را پوشش می‌دهد؛ شامل characterization خواص، طراحی مواد و تمرکز بر ذخیره انرژی نهان و کارایی سیستم‌ها. منبعی عالی برای درک fundamentals ترمودینامیکی.
                    </p>
                </div>
            </div>
            <div class="options-container flex justify-center mt-4 space-x-4 rtl:space-x-reverse">
                <a href="/articles/isi/ISIPCM_fa.pdf" target="_blank" rel="noopener noreferrer" class="option-btn px-4 py-2 bg-primary text-primary-foreground rounded hover:bg-primary/90">
                    FA
                </a>
                <a href="/articles/isi/ISIPCM.pdf" target="_blank" rel="noopener noreferrer" class="option-btn px-4 py-2 bg-primary text-primary-foreground rounded hover:bg-primary/90">
                    EN
                </a>
            </div>
        </div>
    </main>
</body>
</html>
