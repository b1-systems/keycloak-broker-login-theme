# keycloak-broker-login-theme

## Overview

The theme found in [themes/broker-theme/login](themes/broker-theme/login) can
be used to persist the choice of upstream IdP a user has made when encountering
a broker realm as a cookie `kc-social-item`.

The theme found in [themes/idp-theme/login](themes/idp-theme/login) can be used
to, at the upstream IdP relam offer to the user the choice of discarding the
persistence cookie `kc-social-item` and return to the choice of IdP at the
broker realm login form.

## Notes

* Tested with Keycloak version 26.1.0

## Author and Copyright

Copyright © 2025 B1 Systems GmbH, Vohburg a.d. Donau, Germany <info@b1-systems.de>

This software is distributed under the terms and conditions of the MIT license;
see the file [COPYING.txt](COPYING.txt) for details.
