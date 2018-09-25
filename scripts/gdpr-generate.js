// fetch iuenda apis
// save into html template

//https://www.iubenda.com/api/privacy-policy/27944545/only-legal
//https://www.iubenda.com/api/privacy-policy/27944545/cookie-policy

const PRIVACY_POLICY_URL = 'https://www.iubenda.com/api/privacy-policy/27944545/only-legal'
const COOKIE_POLICY_URL = 'https://www.iubenda.com/api/privacy-policy/27944545/cookie-policy'
const PRIVACY_TEMPLATE = 'src/tpl/privacy.html.tpl'
const PRIVACY_TARGET_PATH = 'dist/privacy-policy.html'
const COOKIE_TARGET_PATH = 'dist/cookie-policy.html'

const { promisify } = require('util')
const fs = require('fs')
const fetch = require('isomorphic-unfetch')

const writeFile = promisify(fs.writeFile)
const readFile = promisify(fs.readFile)


const setup = async function () {

	const tpl = (await readFile(PRIVACY_TEMPLATE)).toString()

	const privacyPolicy = await fetch(PRIVACY_POLICY_URL)
		.then( r => r.json() )

	const cookiePolicy = await fetch(COOKIE_POLICY_URL)
		.then( r => r.json() )

	writeFile(PRIVACY_TARGET_PATH,
		tpl
			.replace('{{CONTENT}}',privacyPolicy.content)
			.replace('{{TITLE}}', 'Privacy Policy')
	)

	writeFile(COOKIE_TARGET_PATH,
		tpl
			.replace('{{CONTENT}}',cookiePolicy.content)
			.replace('{{TITLE}}', 'Cookie Policy')
	)
}


setup()
