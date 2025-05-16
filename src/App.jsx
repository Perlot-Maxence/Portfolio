import 'animate.css';
import "animate.css/animate.compat.css";
import { motion } from 'framer-motion';
import { AiFillApi, AiFillBuild, AiFillFolder, AiFillPushpin, AiFillSchedule } from 'react-icons/ai';
import { PiCertificate } from "react-icons/pi";
import { Timeline } from 'rsuite';
import 'rsuite/dist/rsuite.min.css';
import { Toaster } from 'sonner';
import './App.css';
import Knowledge from './components/Knowledge';
import SideNav from './components/SideNav';
import FeedBacks from './components/feedBacks';
import Links from './components/Links';


const isMobile = window.innerWidth < 768;

function App() {
	return (
		<>
			{isMobile ?
				<nav className={`absolute top-0 left-0 w-full h-16 bg-accent flex items-center justify-between px-4 *:border *:p-2 *:rounded gap-2`}>
					<a className='border-zinc-600' href="#skills"><AiFillApi /></a>
					<a className='border-zinc-600' href="#projects"><AiFillFolder /></a>
					<a className='border-zinc-600' href=""><AiFillBuild /></a>
					<a className='border-zinc-600' href=""><AiFillSchedule /></a>
				</nav>
				:
				<SideNav />
			}
			<Toaster position='top-right' richColors theme='dark' />
			<div className="m-auto w-[90%] lg:w-1/2 mt-6">
				<header className='flex lg:block'>
					<div className='w-16 h-16 rounded-full contain-content justify-center lg:hidden mr-4'>
						<img src="/src/assets/self.jpg" className='absolute -top-1/3' />
					</div>
					<div className='flex flex-col'>
						<h1>PERLOT Maxence</h1>
						<h2>FullStack developper</h2>
						<p className='flex items-baseline gap-2 text-sm! lg:text-xl! mt-2 px-2 bg-accent w-fit rounded-full'><AiFillPushpin className='text-base! lg:text-xl!' />Grand-Est, France</p>
					</div>
				</header >
				<main>
					<section id='skills'>
						<h1>Skills</h1>
						<div className='grid lg:grid-cols-2 gap-4'>
							<Knowledge />
						</div>

					</section>
					<section id='projects'
					>
						<motion.h1
							initial={{ opacity: 0, x: -100 }}
							whileInView={{ opacity: 1, x: 0 }}
							transition={{ duration: 0.5, type: "keyframes" }}
							className='text-3xl lg:text-4xl font-bold mb-4'
						>Projects</motion.h1>
						<motion.p
							initial={{ opacity: 0, x: -100 }}
							whileInView={{ opacity: 1, x: 0 }}
							transition={{ duration: 0.5, delay: 0.5, type: "keyframes" }}
						>
							Lorem ipsum dolor sit amet consectetur adipisicing elit.
							Molestiae distinctio eius odio ratione, asperiores velit,
							dolor tempore aspernatur, omnis exercitationem praesentium suscipit.
							Laborum exercitationem fuga, sunt ipsum commodi consequuntur eius.
						</motion.p>
					</section>
					<section>
						<motion.h1
							initial={{ opacity: 0, x: -100 }}
							whileInView={{ opacity: 1, x: 0 }}
							transition={{ duration: 0.5, type: "keyframes" }}
						>Experiences</motion.h1>
						<motion.p
							initial={{ opacity: 0, x: -100 }}
							whileInView={{ opacity: 1, x: 0 }}
							transition={{ duration: 0.5, delay: 0.5, type: "keyframes" }}>
							Lorem ipsum dolor sit amet consectetur adipisicing elit.
							Molestiae distinctio eius odio ratione, asperiores velit,
							dolor tempore aspernatur, omnis exercitationem praesentium suscipit.
							Laborum exercitationem fuga, sunt ipsum commodi consequuntur eius.
						</motion.p>
					</section>
					<section>
						<motion.h1
							initial={{ opacity: 0, x: -100 }}
							whileInView={{ opacity: 1, x: 0 }}
							transition={{ duration: 0.5, type: "keyframes" }}
							className='flex gap-4 items-center'><PiCertificate size={64} /> Educations</motion.h1>
						<motion.div
							initial={{ opacity: 0, x: -100 }}
							whileInView={{ opacity: 1, x: 0 }}
							transition={{ duration: 0.5, delay: 0.5, type: "keyframes" }}>
							<Timeline isItemActive={Timeline.ACTIVE_FIRST} endless>
								<Timeline.Item>2025-2027 Mastère expert en ingéniere logiciel * Alternance <strong>(Recherche d'entreprise)</strong></Timeline.Item>
								<Timeline.Item>2023-2024 Licence général informatique * Alternance au Centre hospitalier de Wissembourg</Timeline.Item>
								<Timeline.Item>2021-2023 Brevet technicien supérieur * Systèmes numérique (Option : Informatique et réseau)</Timeline.Item>
								<Timeline.Item>2018-2021 Baccalauréat professionnel * Métier de l'électricité et de ses environements connéctés</Timeline.Item>
							</Timeline>

						</motion.div>
					</section>
					<section>
						<motion.h1
							initial={{ opacity: 0, x: -100 }}
							whileInView={{ opacity: 1, x: 0 }}
							transition={{ duration: 0.5, type: "keyframes" }}>Feedback</motion.h1>
						<motion.div
							initial={{ opacity: 0, x: -100 }}
							whileInView={{ opacity: 1, x: 0 }}
							transition={{ duration: 0.5, delay: 0.5, type: "keyframes" }}>
							<FeedBacks />
						</motion.div>
					</section>
					<section>
						<motion.h1
							initial={{ opacity: 0, x: -100 }}
							whileInView={{ opacity: 1, x: 0 }}
							transition={{ duration: 0.5, type: "keyframes" }}>Links</motion.h1>
						<Links />
					</section>
				</main>
			</div >
			<footer className='w-full bg-accent p-4 grid	grid-cols-2 gap-4'>
				<p>test</p>
				<p>test</p>
				<p>test</p>
				<p>test</p>
				<p>test</p>
			</footer>
		</>
	)
}

export function downloadURI(uri, name) {
	var link = document.createElement("a");
	link.setAttribute('download', name);
	link.href = uri;
	document.body.appendChild(link);
	link.click();
	link.remove();
}

export default App
