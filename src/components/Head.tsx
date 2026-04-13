import Newstack, { NewstackClientContext } from "@moureau/newstack";
import { getLang } from "../i18n/detect";

/**
 * Head injection.
 * 
 * Adds twitter and page locale (reacts to router path changes).
 */
export class Head extends Newstack {
    render({ page, router, fingerprint }: NewstackClientContext) {
        page.locale = getLang(router.path);

        return (
            <head>
                <link rel="icon" type="image/svg+xml" href="/static/images/favicon.svg" />
                <meta name="twitter:site" content="@luizmoureau" />
                <meta name="twitter:creator" content="@luizmoureau" />
                <link rel="manifest" href={`/site.webmanifest`} />
            </head>
        )
    }
}