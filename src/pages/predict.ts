import { client } from "@gradio/client";



async function inference() {

	const app = await client("https://gradio-hello-world.hf.space/");
	const result = await app.predict("/predict", [		
				"Howdy!", // string  in 'name' Textbox component
	]);
	console.log(result);
}

export default inference;

