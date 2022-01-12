<template>
	<Page>
		<template #page-content>
			<Button @click="$router.push('/about')"> Go to About </Button>
		</template>
	</Page>
</template>

<script>
import Page from '../components/Page.vue';
import Button from '../components/Button.vue';

export default {
	name: 'Home',
	components: { Page, Button },
};
</script>
