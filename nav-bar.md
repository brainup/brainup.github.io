<!-- aqui é onde teremos a nav-bar do projeto  -->

<body>
    <nav class="navbar navbar-expand-lg fixed-top bg-primary-color" id="navbar">
        <div class="container py-3">
            <a class="navbar-brand" href="#">
                <img src="img/logo2.png" alt="BrainUp" />
            </a>
            <button class="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbar-items"
                    aria-controls="navbar-items"
                    aria-expanded="false"
                    aria-label="Toggle navigation">
                <i class="bi bi-list"></i>
            </button>
            <div class="collapse navbar-collapse" id="navbar-items">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="#">HOME</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">SERVIÇOS</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">QUEM SOMOS</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">METODOLOGIA</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">CASES</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">NOSSO TIME</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">CONTATO</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
    </body>




<!-- CSS da nav-bar -->

#navbar a {
  color: #faf5f5;
}

#navbar a:hover {
  color: #111111;
}

#navbar .active {
  border-bottom: 1px solid #eee9e9;
}

.navbar-brand {
  display: flex;
}

.navbar-brand img {
  width: 150px;
}

.navbar-brand span {
  font-weight: 400;
  font-size: 1.0em;
  margin-left: 1.5em;
}

#navbar-items .navbar-nav {
  display: flex;
  justify-content: center;
  width: 100%;
}

#navbar-items .nav-item {
  margin: 0 1em;