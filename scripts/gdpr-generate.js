// fetch iuenda apis
// save into html template

//https://www.iubenda.com/api/privacy-policy/27944545/only-legal
//https://www.iubenda.com/api/privacy-policy/27944545/cookie-policy

const PRIVACY_POLICY_URL = 'https://www.iubenda.com/api/privacy-policy/27944545/only-legal'
const COOKIE_POLICY_URL = 'https://www.iubenda.com/api/privacy-policy/27944545/cookie-policy'

const PRIVACY_TARGET_PATH = 'src/gdpr/privacy-policy.json'
const COOKIE_TARGET_PATH = 'src/gdpr/cookie-policy.json'

const { promisify } = require('util')
const fs = require('fs')
const fetch = require('isomorphic-unfetch')

const writeFile = promisify(fs.writeFile)
const readFile = promisify(fs.readFile)


const setup = async function () {


	const privacyPolicy = await fetch(PRIVACY_POLICY_URL)
		.then( r => r.json() )

	const cookiePolicy = await fetch(COOKIE_POLICY_URL)
		.then( r => r.json() )

	writeFile(PRIVACY_TARGET_PATH, JSON.stringify(privacyPolicy))
	writeFile(COOKIE_TARGET_PATH, JSON.stringify(cookiePolicy))
}


setup()
