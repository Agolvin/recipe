
'use server'

export async function testAction(input: { name: string }) {
    console.log("Données reçues sur le serveur :", input);
    return `Hello ${input.name}`;
  }

