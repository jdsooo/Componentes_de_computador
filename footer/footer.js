let li_jsaquique=document.querySelector(".logi")
    li_jsaquique.innerHTML=`

    <footer class="footer">
    <div class="footer-content">
        <div class="footer-section about">
            <h2 class="logo">Tu Empresa</h2>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ut justo eu odio sagittis gravida.
            </p>
            <div class="contact">
                <span><i class="fas fa-phone"></i> 123-456-7890</span>
                <span><i class="fas fa-envelope"></i> info@tuempresa.com</span>
            </div>
            <div class="socials">
                <a href="#"><i class="fab fa-facebook"></i></a>
                <a href="#"><i class="fab fa-twitter"></i></a>
                <a href="#"><i class="fab fa-instagram"></i></a>
                <a href="#"><i class="fab fa-linkedin"></i></a>
            </div>
        </div>
        <div class="footer-section links">
            <h2>Enlaces Rápidos</h2>
            <ul>
                <li><a href="#">Inicio</a></li>
                <li><a href="#">Acerca de</a></li>
                <li><a href="#">Servicios</a></li>
                <li><a href="#">Contacto</a></li>
            </ul>
        </div>
        <div class="footer-section contact-form">
            <h2>Contacto</h2>
            <form action="#" method="post">
                <input type="email" name="email" class="text-input contact-input" placeholder="Tu correo electrónico...">
                <textarea name="message" class="text-input contact-input" placeholder="Tu mensaje..."></textarea>
                <button type="submit" class="btn btn-big contact-btn">
                    <i class="fas fa-envelope"></i>
                    Enviar
                </button>
            </form>
        </div>
    </div>
    <div class="footer-bottom">
        &copy; Tu Empresa | Diseñado por Ti
    </div>
</footer>

    `;
