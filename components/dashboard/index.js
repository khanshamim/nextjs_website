export default function Dashboard(){
    return (
        <>
            <header className={styles.header}>
                <div className={styles.navigation}>
                    <div className={styles.navContentRow}>
                        <div className={styles.logo}>
                            <Image src={"Images/profile.jpeg"} className={styles.logoImg} alt="" srcset=""
                            />
                            <h1 className={styles.logoText}>Instagram</h1>
                        </div>

                        <form action="" className={styles.form}>
                            <input type="text" placeholder="Search" name="" id="" className={styles.formInput} />
                        </form>

                        <ul className={styles.navigationList}>
                            <li className={styles.navigationItem}>Home</li>
                            <li className={styles.navigationItem}>Product</li>
                            <li className={styles.navigationItem}><Link href='/about'>About</Link></li>
                            <li className={styles.navigationItem}><Link href='/contact'>Contact</Link></li>
                        </ul>
                    </div>
                </div>
                <div className={styles.headerContent}>
                    <h2 className={styles.headerTitle}>Shamim Khan</h2>
                    <p className={styles.headerDesc}>Software Developer</p>
                    <a href="" className={styles.headerLink}>See Git hub</a>
                </div>
            </header>
            <main>
                <section className="products space">
                    <h2 className="products-title">Products</h2>
                    <div className="products-content row">
                        <div className="product">
                            <div className="product__img--content">
                                <Image src="images/bodybuilding.jpg" className="product__img" alt="body building" srcset="" />
                            </div>
                            <div className="product__content">
                                <h3 className="product__title">Body Building Rod</h3>
                                <p className="product__desc"> body bulding rod

                                </p>
                                <div className="product__rating">
                                    <Image src="https://img.icons8.com/color/20/000000/star--v1.png" />
                                    <Image src="https://img.icons8.com/color/20/000000/star--v1.png" />
                                    <Image src="https://img.icons8.com/color/20/000000/star--v1.png" />
                                    <Image src="https://img.icons8.com/color/20/000000/star--v1.png" />
                                    <Image src="https://img.icons8.com/color/20/000000/star--v1.png" />
                                </div>
                                <p className="product__price">$200</p>
                            </div>
                        </div>

                        <div className="product">
                            <div className="product__img--content">
                                <Image src="images/bodybuilding.jpg" className="product__img" alt="body building" srcset="" />
                            </div>
                            <div className="product__content">
                                <h3 className="product__title">Body Building Rod</h3>
                                <p className="product__desc"> body bulding rod

                                </p>
                                <div className="product__rating">
                                    <Image src="https://img.icons8.com/color/20/000000/star--v1.png" />
                                    <Image src="https://img.icons8.com/color/20/000000/star--v1.png" />
                                    <Image src="https://img.icons8.com/color/20/000000/star--v1.png" />
                                    <Image src="https://img.icons8.com/color/20/000000/star--v1.png" />
                                    <Image src="https://img.icons8.com/color/20/000000/star--v1.png" />
                                </div>
                                <p className="product__price">$200</p>
                            </div>
                        </div>

                        <div className="product">
                            <div className="product__img--content">
                                <Image src="images/bodybuilding.jpg" className="product__img" alt="body building" srcset="" />
                            </div>
                            <div className="product__content">
                                <h3 className="product__title">Body Building Rod</h3>
                                <p className="product__desc"> body bulding rod

                                </p>
                                <div className="product__rating">
                                    <Image src="https://img.icons8.com/color/20/000000/star--v1.png" />
                                    <Image src="https://img.icons8.com/color/20/000000/star--v1.png" />
                                    <Image src="https://img.icons8.com/color/20/000000/star--v1.png" />
                                    <Image src="https://img.icons8.com/color/20/000000/star--v1.png" />
                                    <Image src="https://img.icons8.com/color/20/000000/star--v1.png" />
                                </div>
                                <p className="product__price">$200</p>
                            </div>
                        </div>
                        <div className="product">
                            <div className="product__img--content">
                                <Image src="images/bodybuilding.jpg" className="product__img" alt="body building" srcset="" />
                            </div>
                            <div className="product__content">
                                <h3 className="product__title">Body Building Rod</h3>
                                <p className="product__desc"> body bulding rod

                                </p>
                                <div className="product__rating">
                                    <Image src="https://img.icons8.com/color/20/000000/star--v1.png" />
                                    <Image src="https://img.icons8.com/color/20/000000/star--v1.png" />
                                    <Image src="https://img.icons8.com/color/20/000000/star--v1.png" />
                                    <Image src="https://img.icons8.com/color/20/000000/star--v1.png" />
                                    <Image src="https://img.icons8.com/color/20/000000/star--v1.png" />
                                </div>
                                <p className="product__price">$200</p>
                            </div>
                        </div>
                        <div className="product">
                            <div className="product__img--content">
                                <Image src="images/bodybuilding.jpg" className="product__img" alt="body building" srcset="" />
                            </div>
                            <div className="product__content">
                                <h3 className="product__title">Body Building Rod</h3>
                                <p className="product__desc"> body bulding rod

                                </p>
                                <div className="product__rating">
                                    <Image src="https://img.icons8.com/color/20/000000/star--v1.png" />
                                    <Image src="https://img.icons8.com/color/20/000000/star--v1.png" />
                                    <Image src="https://img.icons8.com/color/20/000000/star--v1.png" />
                                    <Image src="https://img.icons8.com/color/20/000000/star--v1.png" />
                                    <Image src="https://img.icons8.com/color/20/000000/star--v1.png" />
                                </div>
                                <p className="product__price">$200</p>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="photoviewer">
                    <h2 className="photoviewer-title">Photo Gallery</h2>
                    <div className="photoviewer-content">
                        <div className="photoviewer-left">
                            <h3 className="photoviewer__title">Web Series</h3>
                            <p className="photoviewer__desc">
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum
                            </p>
                        </div>
                        <div className="photoviewer-right">
                            <Image src="images/woman.jpg" alt="" className="photoviewer__img" />
                        </div>
                    </div>
                </section>


                <section className="services">
                    <h2 className="services-title">Services</h2>
                    <div className="services-content">
                        <div className="service">
                            <h3 className="service__title">Web Development</h3>
                            <p className="service__desc">
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum
                            </p>
                            <p className="service__desc">
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum
                            </p>
                            <a href="#" className="service__link">Browse</a>
                        </div>

                        <div className="service">
                            <h3 className="service__title">Android Development</h3>
                            <p className="service__desc">
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum
                            </p>
                            <p className="service__desc">
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum
                            </p>
                            <a href="#" className="service__link">Browse</a>
                        </div>

                        <div className="service">
                            <h3 className="service__title">Desktop App Development</h3>
                            <p className="service__desc">
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum
                            </p>
                            <p className="service__desc">
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum
                            </p>
                            <a href="#" className="service__link">Browse</a>
                        </div>
                    </div>
                </section>

                <section className="teams">
                    <h2 className="teams-title">Our team</h2>
                    <div className="teams-content">
                        <div className="team">
                            <Image src="/images/profile.jpeg" alt="" className="team__img" />
                            <h3 className="team__name">Shamim Khan</h3>
                            <p className="team__text">Front End Developer</p>
                            <a href="#" className="team__link">Contact</a>
                        </div>
                        <div className="team">
                            <Image src="/images/profile.jpeg" alt="" className="team__img" />
                            <h3 className="team__name">Shamim Khan</h3>
                            <p className="team__text">Front End Developer</p>
                            <a href="#" className="team__link">Contact</a>
                        </div>
                        <div className="team">
                            <Image src="/images/profile.jpeg" alt="" className="team__img" />
                            <h3 className="team__name">Shamim Khan</h3>
                            <p className="team__text">Front End Developer</p>
                            <a href="#" className="team__link">Contact</a>
                        </div>
                    </div>
                </section>

            </main>
            <footer className="footer">
                <p className="footer-text">&copy; Copy right to Shamim Khan.</p>
            </footer>
        </>
    )
}