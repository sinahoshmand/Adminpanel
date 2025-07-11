<html>
<head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1">
    @routes
    @vite(['resources/js/app.jsx', "resources/js/Pages/{$page['component']}.jsx"])
    @viteReactRefresh
    @inertiaHead
</head>
<body>
    @inertia
</body>
</html>
