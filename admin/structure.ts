export const structure = (S) => {
  return S.list()
    .title('content')
    .items([
      S.listItem()
        .title('Home Page')
        .child(
          S.document().schemaType('pageHomepage').documentId('pageHomepage').title('Home Page'),
        ),
      S.listItem().title('Pages').child(S.documentTypeList('page').title('Pages')),
      S.listItem().title('Navigation').child(S.documentTypeList('navigation').title('Navigation')),
      S.listItem()
        .title('Settings')
        .child(
          S.list()
            .id('settingMenus')
            .items([
              S.listItem()
                .title('Menu Settings')
                .child(
                  S.document()
                    .title('Menu Settings')
                    .schemaType('settingsMenus')
                    .documentId('settingsMenus'),
                ),
              S.listItem()
                .title('Social Media Settings')
                .child(
                  S.document()
                    .title('Social Media Settings')
                    .schemaType('settingsSocial')
                    .documentId('settingsSocial'),
                ),

              S.listItem()
                .title('404 Settings')
                .child(
                  S.document()
                    .title('404 Settings')
                    .schemaType('settingsNotFound')
                    .documentId('settingsNotFound'),
                ),
            ]),
        ),
    ])
}
