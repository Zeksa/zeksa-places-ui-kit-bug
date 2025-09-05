/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck

import { useMapsLibrary } from "@vis.gl/react-google-maps";

type GooglePlaceDetailsCompactProps = {
  placeId: string;
};

export const GooglePlaceDetailsCompact = ({
  placeId,
}: GooglePlaceDetailsCompactProps) => {
  useMapsLibrary("places");

  return (
    <gmp-place-details-compact orientation="horizontal" truncation-preferred>
      <gmp-place-details-place-request
        place={placeId}
      ></gmp-place-details-place-request>

      <gmp-place-content-config>
        <gmp-place-media />
        <gmp-place-type />
        <gmp-place-price />
        <gmp-place-accessible-entrance-icon />
        <gmp-place-open-now-status />
        <gmp-place-attribution
          light-scheme-color="black"
          dark-scheme-color="black"
        />
      </gmp-place-content-config>
    </gmp-place-details-compact>
  );
};
