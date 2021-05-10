const moment = require('moment');

const DATA = {
  initialData: {
    status: 'Approved',
    created: moment('20200315').format('DD-MM-YYYY'),
    updated: '2 days ago',
    caseNo: '#1ASCCC',
    businessCategory: 'Client',
    companyName: 'Assicurzioni Generali SPA',
  },
  organizationData: {
    identificationData: {
      companyName: 'Assicurzioni Generali SPA',
      leiCode: 'BFXS5BFXS5BFXS5BFXS5',
      vatNumber: 'BFXS5BFXS5BFXS5BFXS5',
      companyEmail: 'example@example.com',
      companyPhone: '000-0000-0000',
      companyFax: '000-0000-0000',
    },
    addresses: [
      {
        address: 'Pizza Duca Degli Abruzzi',
        city: 'Milano',
        province: 'mi',
        zip: '00000',
        country: 'Italy',
        civicNum: '0000000000',
      },
    ],
    contactInfo: [
      {
        fullName: 'Diana Moss',
        position: 'CFO',
        email: 'diana.m1@example.com',
        mobilePhone: '+ 000 00 11 1111',
        businessPhone: '+ 000 00 11 1111',
        fax: '+ 000 00 11 1111',
      },
      {
        fullName: 'Diana Moss',
        position: 'CFO',
        email: 'diana.m2@example.com',
        mobilePhone: '+ 000 00 11 1111',
        businessPhone: '+ 000 00 11 1111',
        fax: '+ 000 00 11 1111',
      },
      {
        fullName: 'Diana Moss',
        position: 'CFO',
        email: 'diana.m3@example.com',
        mobilePhone: '+ 000 00 11 1111',
        businessPhone: '+ 000 00 11 1111',
        fax: '+ 000 00 11 1111',
      },
    ],
  },
  clientData: {
    amlData: {
      legalNature: 'SPA Societa Per Aziona',
      sae: '294 Insurance Company',
      atecd: '111 Societa Per Aziona',
      placeConducting: 'Italy, Mi',
      relevantBusCtry: 'Extra EU Italy',
      parentCompanyCountry: 'EU',
    },
    estData: {
      estDate: moment('18840420').format('DD-MM-YYYY'),
      estLocation: 'Italy, Trieste, MI',
      registration: true,
      regNum: '1235531233',
      nameOfRegister: 'Micael Angelo',
      estPurposes:
        'Lorem Ipsum Dolor Lorem Ipsum Dolor Lorem Ipsum Dolor Lorem Ipsum Dolor Lorem Ipsum Dolor Lorem Ipsum Dolor Lorem Ipsum Dolor Lorem Ipsum Dolor ',
    },
    addClientData: {
      mifidClass: 'Professional',
      fatcaStatus: 'Financial Institution',
      ffiEnvironment: 'Participating FFI',
      ginCode: '3123 6345 242134',
      emirClassification: 'NFC+',
      emirCategory: '3',
      clientCategory: 'Group Companies',
      gdprPrivacy: true,
      relationshipManager: 'GIAM',
    },
    riskAssessment: {
      riskcheckPerformed: true,
      riskScore: 'Low',
    },
  },
  brokerData: {
    assessments: {
      settlementScore: 4,
      tradingDeskScore: 1,
      fitchRating: 'A+',
      moodyRating: 'F1',
      spRating: 'F1',
      mfidScope: true,
      isdaInPlace: true,
    },
    riskAssessment: {
      wcAdverseEvents: true,
      wcAdverseEventsScore: 'Medium',
    },
    services: {
      otcTrading: true,
      custodiamBanks: true,
      clearingBrokerEtd: false,
      executiveBroker: true,
    },
    additionalBrokerData: {
      onbordingDate: moment('20200322').format('DD-MM-YYYY'),
      termOfBusiness: moment('20200322').format('DD-MM-YYYY'),
      code: '1234',
    },
  },
};

module.exports = DATA;
