import {faker} from "@faker-js/faker";

const generateFakeAssociado = () => {
  return {
    id: faker.datatype.uuid(),
    nome: faker.name.fullName(),
    tipo_pessoa: faker.helpers.arrayElement(["fisica", "juridica"]), // Assuming  these are the enum values
    insc_estadual: faker.random.alphaNumeric(10),
    razao_social: faker.company.name(),
    sexo: faker.helpers.arrayElement(["masculino", "feminino", "outro"]),
    data_nasc: BigInt(faker.date.past(30).getTime()), // Converts date to timestamp
    cpf: faker.datatype.string(11), // Adjust based on your requirements
    cnpj: faker.datatype.string(14), // Adjust based on your requirements
    rg: faker.datatype.string(9),
    data_exped: BigInt(faker.date.past(10).getTime()), // Converts date to timestamp
    orgao_exped: faker.company.companySuffix(),
    cod_prop: faker.random.alphaNumeric(8),
    enderecos: {
      street: faker.address.streetAddress(),
      city: faker.address.city(),
      state: faker.address.state(),
      zip: faker.address.zipCode(),
    },
    contatos: {
      email: faker.internet.email(),
      phone: faker.phone.number(),
    },
    programas: {
      programName: faker.commerce.productName(),
      description: faker.commerce.productDescription(),
    },
    assinatura: faker.internet.email(),
    observacoes: faker.lorem.sentence(),
    data_replica: BigInt(Date.now()), // Current timestamp
    created_at: BigInt(Date.now()), // Current timestamp
    modified_at: BigInt(Date.now()), // Current timestamp
    sequencial: BigInt(0), // This will be auto-incremented by the database
  };
};

const fakeAssociado = generateFakeAssociado();
console.log(fakeAssociado);
