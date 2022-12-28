import { component$, useClientEffect$, useStore, useStylesScoped$ } from '@builder.io/qwik';
import { DocumentHead, useLocation } from '@builder.io/qwik-city';
import styles from './product.css?inline';
export default component$(() => {
	useStylesScoped$(styles);
	return (
		<div class="flex bg-ci-background-gray">
			<div class="flex-none w-32">
				Side Menu
			</div>
			<div class="w-full ml-9">
				<div class="text-2xl font-normal mb-5">Backstage</div>
				<div class="text-lg font-medium mb-2">Upload files</div>
				<div class="bg-white w-full p-5">
					<div class="text-sm font-medium">A Product</div>
					<div class="p-5">
						<button></button>
					</div>
				</div>
			</div>
		</div>
	);
})
export const head: DocumentHead = {
	title: 'Products',
};