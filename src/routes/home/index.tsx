import { h, createRef } from 'preact';
import style from './style.css';

const Home = () => {
	let el = createRef<HTMLDivElement>();
	return (
		<div class={style.home} ref={el}>
			<h1>Home</h1>
			<div class={style.article}>
				<div>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. In quos consectetur suscipit eveniet esse inventore, officia et, praesentium facilis ab fugit eos voluptatum, repellat illo reiciendis aliquid! Blanditiis, veniam nulla. Assumenda consequatur pariatur repudiandae saepe delectus ex beatae. Recusandae adipisci dicta ad suscipit tempore accusamus architecto. <br /><br /> Magni nemo accusantium ipsa pariatur culpa, nesciunt alias qui, nihil consectetur cupiditate quaerat harum? Ex quia officiis expedita perspiciatis earum, vitae incidunt officia rem explicabo ipsum aperiam quaerat nam at quae nesciunt dolorum hic amet, inventore architecto deleniti? Tempora nisi alias eligendi ipsam consequatur a beatae sed, voluptate ipsa harum quidem atque voluptates reiciendis!
				</div>
				<div>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae deleniti est dignissimos assumenda aperiam ad, iusto nemo sed modi! Sunt laboriosam quam, maiores nisi molestias, cum fugit consequuntur quos est numquam velit aliquam magni maxime impedit ea molestiae accusamus officiis. Fugiat quia culpa accusamus. Veritatis nemo assumenda vel!<br /><br /> Sequi iusto sit voluptates sapiente ducimus saepe at recusandae, hic dolorum assumenda repellendus dignissimos velit asperiores cum impedit necessitatibus id reiciendis provident sed autem. Voluptate, esse. Odio facilis soluta nesciunt illum incidunt tenetur laborum cum esse deserunt vel quia labore voluptas consequatur commodi, eligendi quam corrupti ab quis? Quibusdam sed neque atque.
				</div>
			</div>
			<h2>
				Gallery
			</h2>
			<div class={style.gallery_images}>
				<div>
					<img src="https://www.adobe.com/express/discover/sizes/media_1f926486aa3f1366488ec86bb5c749f268fc2ffeb.png?width=400&format=png&optimize=medium" alt="photo" />
				</div>
				<div>
					<img src="https://www.adobe.com/express/discover/sizes/media_1f926486aa3f1366488ec86bb5c749f268fc2ffeb.png?width=400&format=png&optimize=medium" alt="photo" />
				</div>
				<div>
					<img src="https://www.adobe.com/express/discover/sizes/media_1f926486aa3f1366488ec86bb5c749f268fc2ffeb.png?width=400&format=png&optimize=medium" alt="photo" />
				</div>
				<div>
					<img src="https://www.adobe.com/express/discover/sizes/media_1f926486aa3f1366488ec86bb5c749f268fc2ffeb.png?width=400&format=png&optimize=medium" alt="photo" />
				</div>
			</div>

			<div class={style.gallery_text}>
				<div>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. In quos consectetur suscipit eveniet esse inventore, officia et, praesentium facilis ab fugit eos voluptatum, repellat illo reiciendis aliquid! Blanditiis, veniam nulla. Assumenda consequatur pariatur repudiandae saepe delectus ex beatae. Recusandae adipisci dicta ad suscipit tempore accusamus architecto. <br /><br /> Magni nemo accusantium ipsa pariatur culpa, nesciunt alias qui, nihil consectetur cupiditate quaerat harum? Ex quia officiis expedita perspiciatis earum, vitae incidunt officia rem explicabo ipsum aperiam quaerat nam at quae nesciunt dolorum hic amet, inventore architecto deleniti? Tempora nisi alias eligendi ipsam consequatur a beatae sed, voluptate ipsa harum quidem atque voluptates reiciendis!
				</div>
				<div>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae deleniti est dignissimos assumenda aperiam ad, iusto nemo sed modi! Sunt laboriosam quam, maiores nisi molestias, cum fugit consequuntur quos est numquam velit aliquam magni maxime impedit ea molestiae accusamus officiis. Fugiat quia culpa accusamus. Veritatis nemo assumenda vel!<br /><br /> Sequi iusto sit voluptates sapiente ducimus saepe at recusandae, hic dolorum assumenda repellendus dignissimos velit asperiores cum impedit necessitatibus id reiciendis provident sed autem. Voluptate, esse. Odio facilis soluta nesciunt illum incidunt tenetur laborum cum esse deserunt vel quia labore voluptas consequatur commodi, eligendi quam corrupti ab quis? Quibusdam sed neque atque.
				</div>
			</div>

			<h1>Section</h1>
			<div class={style.interior}>
				<img src="https://lines-hub.com/wp-content/uploads/2019/10/courtesy-of-Nina-Maya-Interiors-Vaucluse-Residence_Linesmag_1-1170x780.jpg" alt="interior" />
				<div class={style.interior_text}>
					<div>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas asperiores error in laborum corrupti accusamus ducimus quasi ad quos dolor. Tempora commodi, odio voluptatibus ab obcaecati nulla, nam, ea repellat alias ducimus earum fugit aliquid excepturi temporibus sequi magnam qui enim nemo voluptas voluptate ratione suscipit ullam. Deleniti, dignissimos modi? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque perferendis voluptates aliquam odit veniam. Vel consequuntur ex aut? Dolorem amet aliquam laudantium quos porro obcaecati et enim neque accusantium voluptates eos atque, veritatis assumenda eius dicta unde distinctio illum sequi vel accusamus culpa, similique commodi doloribus. Quasi ratione nostrum similique recusandae, voluptate ex error corrupti nesciunt, labore ipsam eum, ullam libero? Dignissimos culpa harum consequuntur maiores labore assumenda aperiam minus enim voluptate quae a, deserunt molestias, molestiae quod rem. A nam quibusdam laboriosam aut praesentium in saepe quos non? Sed ea rem fuga impedit illum, quo neque officia natus quam!
						<br />
						<br />
						Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure amet ab autem voluptas voluptatibus! Iure nesciunt fugiat provident minus tempore aliquid consequatur quae architecto magni temporibus reprehenderit eos modi earum ea, consectetur molestias praesentium rem voluptates similique placeat impedit deleniti pariatur incidunt. Natus, dolorum vero!
						<br />
						Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores dignissimos quasi vel inventore facere modi similique dolore aliquid iure harum, sequi labore necessitatibus cupiditate quidem atque odit rem nam tempore dolorem est illo soluta odio impedit minima. Adipisci quasi reiciendis ducimus non possimus doloribus illo vel? Exercitationem, iure eaque! Repudiandae nostrum enim aliquid cum labore neque sit omnis ad vel praesentium assumenda soluta minima rem consequatur recusandae harum modi repellendus, culpa atque placeat voluptatum. Unde, autem sequi. Fugit natus quas, ad ducimus expedita explicabo rem incidunt cumque accusantium.
					</div>
				</div>
			</div>
			<div>
				<ul>
					<li>
						<span>Facebook</span>
						<div>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repudiandae ut perferendis commodi architecto similique accusamus distinctio consequatur illo. Excepturi, dicta at porro quam minima non repellendus odit quo accusantium est eos! Ipsum at obcaecati numquam minus, reprehenderit maxime nesciunt cum necessitatibus aut perferendis illum, in vero beatae minima eligendi. Omnis neque dolorem modi quasi ut quis! Quisquam natus consequuntur voluptates nostrum, cumque ad similique laboriosam perferendis rerum voluptatibus hic. Animi quaerat ipsam ratione cumque nisi iure a ullam aliquid dolores, perferendis tempora maiores laudantium ab numquam deserunt voluptatem porro esse? Natus perspiciatis aliquid itaque omnis non, a aliquam dolor quasi?</div>
					</li>
					<li>
						<span>Facebook</span>
						<div>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repudiandae ut perferendis commodi architecto similique accusamus distinctio consequatur illo. Excepturi, dicta at porro quam minima non repellendus odit quo accusantium est eos! Ipsum at obcaecati numquam minus, reprehenderit maxime nesciunt cum necessitatibus aut perferendis illum, in vero beatae minima eligendi. Omnis neque dolorem modi quasi ut quis! Quisquam natus consequuntur voluptates nostrum, cumque ad similique laboriosam perferendis rerum voluptatibus hic. Animi quaerat ipsam ratione cumque nisi iure a ullam aliquid dolores, perferendis tempora maiores laudantium ab numquam deserunt voluptatem porro esse? Natus perspiciatis aliquid itaque omnis non, a aliquam dolor quasi?</div>
					</li>
					<li>
						<span>Facebook</span>
						<div>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repudiandae ut perferendis commodi architecto similique accusamus distinctio consequatur illo. Excepturi, dicta at porro quam minima non repellendus odit quo accusantium est eos! Ipsum at obcaecati numquam minus, reprehenderit maxime nesciunt cum necessitatibus aut perferendis illum, in vero beatae minima eligendi. Omnis neque dolorem modi quasi ut quis! Quisquam natus consequuntur voluptates nostrum, cumque ad similique laboriosam perferendis rerum voluptatibus hic. Animi quaerat ipsam ratione cumque nisi iure a ullam aliquid dolores, perferendis tempora maiores laudantium ab numquam deserunt voluptatem porro esse? Natus perspiciatis aliquid itaque omnis non, a aliquam dolor quasi?</div>
					</li>
					<li>
						<span>Facebook</span>
						<div>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repudiandae ut perferendis commodi architecto similique accusamus distinctio consequatur illo. Excepturi, dicta at porro quam minima non repellendus odit quo accusantium est eos! Ipsum at obcaecati numquam minus, reprehenderit maxime nesciunt cum necessitatibus aut perferendis illum, in vero beatae minima eligendi. Omnis neque dolorem modi quasi ut quis! Quisquam natus consequuntur voluptates nostrum, cumque ad similique laboriosam perferendis rerum voluptatibus hic. Animi quaerat ipsam ratione cumque nisi iure a ullam aliquid dolores, perferendis tempora maiores laudantium ab numquam deserunt voluptatem porro esse? Natus perspiciatis aliquid itaque omnis non, a aliquam dolor quasi?</div>
					</li>
				</ul>
			</div>
		</div>
	)
};

export default Home;
