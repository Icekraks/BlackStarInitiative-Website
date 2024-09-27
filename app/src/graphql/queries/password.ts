export const PASSWORD_PAGE_QUERY = `
  *[_type == "settingsMaintenance"][0] {
      title,
      subtitle,
      description,
      maintenanceMode,
      password
    }
`;
