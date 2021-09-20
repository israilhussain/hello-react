async function getDropDownListValues(props: Props, lookupValue: string) {
    let objects: any[] = [];
    try {
      const response = await props.fetch(
        `/api/proxy/ms-call/gateway/TammJourneyAdu-community/1.0/doh/lookups/GetDropDownListValues/${lookupValue}?lang=${props.locale}`,
        'GET',
      );
      if (response && response.success && response.data) {
        objects = response.data ?? [];
      }
    } catch (error) {}
    return objects;
  }

  async function getCountries(props: Props) {
    return await getDropDownListValues(props, 'SD_COUNTRY');
  }

  const countries = await api.getCountries(props);

  //##### For Login ###########

  // props.actions.facilityLicenseNo.update
  // props.actions.route.update
  // props.state.route
  // props.state.facilityLicenseNo

  props.actions.errorFetch.update(false);

  //props.user
  const redirectUrl = utils.getRedirectUrl();
  props.actions.uaePassUrl.update(
    `${props.tammUrl}/searchresults/api/smartpass/login?redirectUrl=${redirectUrl}&lang=${props.locale}&provider=uaepass`
  );
  props.actions.smartPassUrl.update(
    `${props.tammUrl}/searchresults/api/smartpass/login?redirectUrl=${redirectUrl}&lang=${props.locale}&provider=smartpass`
  );
