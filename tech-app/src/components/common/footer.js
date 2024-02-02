function AppFooter() {
    return (
        <div id="footer" className='container-fluid'>
            <div className='footer'>
                <div className="logo">
                    <i class='fas fa-bolt'>
                        <a href="#">SERENE TECH</a>
                    </i>
                </div>
                <ul className="socials">
                    <li><a href='#'><i class='fab fa-facebook'></i></a></li>
                    <li><a href='#'><i class='fab fa-twitter'></i></a></li>
                    <li><a href='#'><i class='fab fa-instagram'></i></a></li>
                    <li><a href='#'><i class='fab fa-pinterest'></i></a></li>
                    <li><a href='#'><i class='fab fa-linkedin'></i></a></li>
                </ul>
                <div className="copyright"> &copy; 2024 Bubba Jaymes </div>
            </div>
        </div>
    );
}

export default AppFooter;