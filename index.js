let nunjucks = require('nunjucks');

nunjucks.configure({ autoescape: true });

let template = `{
  "@context": [
    "https://www.w3.org/2018/credentials/v1",
    "https://schema.opencerta.org/fhir/202009"
  ],
  "type": [
    "VerifiableCredential",
    "FHIRCredential"
  ],
  "id": "{{ base.credentialId }}",
  "issuer": "{{ base.issuerRef }}",
  "issuanceDate": "{{ base.issuanceDate }}",
  "expirationDate": "{{ base.expirationDate }}",
  "credentialSubject": {
    "type": "FHIRCredential",
    "id": "{{ subject.id }}",
    "givenName": "{{ subject.givenName }}",
    "additionalName": "{{ subject.additionalName }}",
    "familyName": "{{ subject.familyName }}",
    "gender": "{{ subject.gender }}",
    "honorificPrefix": "{{ subject.honorificPrefix }}",
    "honorificSuffix": "{{ subject.honorificSuffix }}",
    "photograph": "{{ subject.photograph }}",
    "fhirVersion": "{{ fhir.version }}",
    "fhirSource": "{{ fhir.payload }}"
  }`;

let base = {
  credentialId: "123e4567-e89b-12d3-a456-426614174000",
  issuerRef: "https://opencerta.org/certificate/v1",
  issuanceDate: "2020-11-05T00:00:00Z",
  expirationDate: "2022-11-05T23:59:59Z"
}

let subject = {
  id: "test-id-123KJHKJDHSFI324IUWYR87-YI873Y4UIH",
  givenName: "Pedro",
  additionalName: "Pablo",
  familyName: "Perez",
  gender: "M",
  honorificPrefix: "Mr",
  honorificSuffix: "Master",
  photograph: " data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAPgAAAElCAYAAADJBi9OAAAK0/IYbwoB1al7+Px5wnxwyZuwuAAAAAElFTkSuQmCC",
}

let verifiableCredentials = nunjucks.renderString(template, { base, subject });

console.log("Verifiable Credentials", verifiableCredentials);
