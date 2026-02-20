import { useState, useRef, useEffect } from 'react'
import { LayoutDashboard, History, GitBranch, FileCheck } from 'lucide-react'
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog'

const TESTIMONIO_VIDEO_URL =
	'https://lafysstpyiejevhrlmzc.supabase.co/storage/v1/object/public/videos/SolHoub/Conspat%20x%20Solware%20(1)%20(1).mp4'

const cards = [
	{
		icon: LayoutDashboard,
		title: 'Visibilidad',
		desc: 'Tablero operativo en tiempo real',
	},
	{
		icon: History,
		title: 'Historial',
		desc: 'Contexto del paciente dentro del centro',
	},
	{
		icon: GitBranch,
		title: 'Trazabilidad',
		desc: 'Estados y responsables por caso/muestra',
	},
	{
		icon: FileCheck,
		title: 'Informes',
		desc: 'Estandarización, firma y emisión sin fricción',
	},
]

const DemoSnapshot = () => {
	const [testimonioOpen, setTestimonioOpen] = useState(false)
	const videoRef = useRef<HTMLVideoElement>(null)

	useEffect(() => {
		if (!testimonioOpen && videoRef.current) {
			videoRef.current.pause()
		}
	}, [testimonioOpen])

	return (
		<section className="section-spacing">
			<div className="container mx-auto px-4">
				<h2 className="mx-auto max-w-3xl text-center text-2xl font-bold tracking-tight text-foreground md:text-4xl">
					El golpe: cómo se ve en vivo
				</h2>

				<div className="mx-auto mt-12 grid max-w-5xl gap-6 sm:grid-cols-2 lg:grid-cols-4">
					{cards.map((c, i) => (
						<div key={i} className="glass-card p-6 glow-blue-hover group">
							<div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary/20">
								<c.icon className="h-5 w-5" />
							</div>
							<h3 className="text-base font-semibold text-foreground">{c.title}</h3>
							<p className="mt-2 text-sm leading-relaxed text-muted-foreground">{c.desc}</p>
						</div>
					))}
				</div>

				<div className="mt-10 text-center">
					<button
						type="button"
						onClick={() => setTestimonioOpen(true)}
						className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-5 py-2.5 text-sm font-medium text-foreground transition-all hover:bg-white/10 cursor-pointer"
					>
						Ver testimonio
					</button>
					<Dialog open={testimonioOpen} onOpenChange={setTestimonioOpen}>
						<DialogContent className="max-w-[95vw] sm:max-w-3xl p-0 gap-0 overflow-hidden border-border/50 bg-background/95 backdrop-blur">
							<DialogHeader className="p-4 pb-0">
								<DialogTitle className="text-center sm:text-left">Testimonio — Conspat x Solware</DialogTitle>
							</DialogHeader>
							<div className="relative w-full aspect-video p-2 sm:p-4">
								<video
									ref={videoRef}
									src={TESTIMONIO_VIDEO_URL}
									controls
									preload="auto"
									className="w-full h-full object-contain rounded-md"
									playsInline
								/>
							</div>
						</DialogContent>
					</Dialog>
				</div>
			</div>
		</section>
	)
}

export default DemoSnapshot
