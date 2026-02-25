import React from 'react'
import { InfiniteMovingCards } from './ui/infinite-moving-cards'

const centros = [
	{
		href: 'https://lafysstpyiejevhrlmzc.supabase.co/storage/v1/object/public/imagenes/Conspat/logo_blanco.png',
	},
	{
		href: 'https://sbqepjsxnqtldyvlntqk.supabase.co/storage/v1/object/public/Logos/logo_marihorgen.svg',
	},
	{
		href: '/logo-spt.png',
	},
  {
    href: 'https://sbqepjsxnqtldyvlntqk.supabase.co/storage/v1/object/public/Logos/logo-cendilab.png'
  }
]

function CentrosSalud() {
	return (
		<section className="section-spacing">
			<div className="container mx-auto px-4">
				<h2 className="mx-auto max-w-3xl text-center text-2xl font-bold tracking-tight text-foreground md:text-4xl">
					Validado en 4 centros de salud
				</h2>

				<div className="mx-auto mt-12 max-w-6xl">
					<InfiniteMovingCards items={centros} direction="right" speed="normal" />
				</div>
			</div>
		</section>
	)
}

export default CentrosSalud
